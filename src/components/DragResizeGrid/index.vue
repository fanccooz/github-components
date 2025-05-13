<template>
  <div ref="dragWrapper" class="drag-resize-grid">
    <div
      v-for="(item, index) in dragData"
      :key="index"
      class="grid-item"
      :data-index="index"
      :style="{
        width: item.width + 'px',
        height: item.height + 'px'
      }"
    >
      <slot :name="item.component" :item="item">
        <component :is="item.component" />
      </slot>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
  import interact from 'interactjs'
  import debounce from 'lodash/debounce'
  import { useResizeObserver } from '@vueuse/core'

  const props = defineProps({
    value: {
      type: Array,
      required: true
    },
    defaultContainerWidth: {
      type: Number,
      default: null
    }
  })

  const emit = defineEmits(['save'])

  const dragWrapper = ref(null)
  const dragData = ref([...props.value])
  const defaultWidth = ref(props.defaultContainerWidth)
  const containerWidth = ref(null)
  const dragIndex = ref(null)

  const handleDebounce = debounce(() => {
    if (defaultWidth.value && props.value) saveData()
  }, 1000)

  const saveData = () => {
    emit('save', {
      defaultContainerWidth: defaultWidth.value,
      dragData: dragData.value
    })
  }

  const clearTransform = target => {
    target.style.transform = 'none'
    target.setAttribute('data-x', 0)
    target.setAttribute('data-y', 0)
  }

  const dragMoveListener = (event, isEnd) => {
    const target = event.target
    const index = target.getAttribute('data-index')
    let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
    target.style.transform = `translate(${x}px, ${y}px)`
    target.style.zIndex = '999999'
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
    dragIndex.value = index
    if (isEnd) {
      target.style.zIndex = 'initial'
      clearTransform(target)
    }
  }

  const resizableListener = (event, isEnd) => {
    const target = event.target
    const index = target.getAttribute('data-index')
    let x = parseFloat(target.getAttribute('data-x')) || 0
    let y = parseFloat(target.getAttribute('data-y')) || 0
    target.style.width = `${event.rect.width}px`
    target.style.height = `${event.rect.height}px`
    x += event.deltaRect.left
    y += event.deltaRect.top
    target.style.transform = `translate(${x}px,${y}px)`
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
    if (isEnd) {
      clearTransform(target)
      setInteractEnd(event)
    }
  }

  const setDragData = (index, rect) => {
    dragData.value[index] = {
      width: adjustWidth(rect.width),
      height: rect.height,
      component: dragData.value[index].component
    }
    dragData.value = [...dragData.value]
    handleDebounce()
  }

  const setInteractEnd = event => {
    const target = event.target
    const index = target.getAttribute('data-index')
    defaultWidth.value = target.parentElement.clientWidth
    containerWidth.value = defaultWidth.value
    setDragData(index, event.rect)
  }

  const adjustWidth = width => {
    const sectionWidth = (containerWidth.value - 48) / 4
    const containerW = containerWidth.value - 16
    const thresholds = [
      sectionWidth,
      sectionWidth * 1.5,
      sectionWidth * 2,
      sectionWidth * 2.5,
      sectionWidth * 3,
      sectionWidth * 3.5,
      containerW
    ]
    const values = [
      sectionWidth,
      sectionWidth,
      sectionWidth * 2 + 16,
      sectionWidth * 2 + 16,
      sectionWidth * 3 + 32,
      sectionWidth * 3 + 32,
      containerW
    ]
    for (let i = 0; i < thresholds.length; i++) {
      if (width <= thresholds[i]) return values[i]
    }
    return containerW
  }

  const replaceLocation = (dragI, dropI) => {
    if (dropI === null || dropI === undefined || dragI === dropI) return
    const draggedItem = dragData.value.splice(dragI, 1)[0]
    dragData.value.splice(dropI, 0, draggedItem)
    dragData.value = [...dragData.value]
    handleDebounce()
  }

  const adjustedDragData = defaultW => {
    if (!containerWidth.value) return
    dragData.value = dragData.value.map(item => {
      const width = item.width
        ? (item.width / defaultWidth.value) * containerWidth.value
        : item.width
      return { ...item, width }
    })
    defaultWidth.value = defaultW
    handleDebounce()
  }

  const initDrag = () => {
    interact('.grid-item')
      .draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          })
        ],
        allowFrom: '.card-header',
        autoScroll: true,
        listeners: {
          move: dragMoveListener,
          end(event) {
            dragMoveListener(event, true)
          }
        }
      })
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        listeners: {
          move: resizableListener,
          end(event) {
            resizableListener(event, true)
          }
        },
        modifiers: [
          interact.modifiers.restrictEdges({ outer: 'parent' }),
          interact.modifiers.restrictSize({ min: { width: 100, height: 50 } })
        ],
        inertia: true
      })
      .dropzone({
        accept: '.grid-item',
        overlap: 0.25,
        ondrop(event) {
          const index = event.target.getAttribute('data-index')
          replaceLocation(dragIndex.value, index)
        }
      })
  }

  onMounted(() => {
    initDrag()
    useResizeObserver(dragWrapper, entries => {
      for (let entry of entries) {
        containerWidth.value = entry.contentRect.width
        adjustedDragData(entry.contentRect.width)
        nextTick(() => {
          const elements = document.querySelectorAll('.grid-item')
          elements.forEach((el, index) => {
            const rect = el.getBoundingClientRect()
            // setDragData(index, rect);
          })
        })
      }
    })
  })
</script>

<style lang="scss" scoped>
  .drag-resize-grid {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .grid-item {
      width: 48%;
      height: 25rem;
      margin: 0 0.5rem 0.5rem 0;
      border: 1px solid #ebeef5;
      background-color: #ffffff;
      color: white;
      border-radius: 0.5rem;
      touch-action: none;
      user-select: text;
      transform: translate(0px, 0px);
      font-size: 16px;

      :deep() {
        .el-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
        }
        .el-card__header {
          height: 61px;
        }
        .el-card__body {
          flex: 1;
        }
      }
    }
  }
</style>
