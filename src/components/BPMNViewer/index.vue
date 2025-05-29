<template>
  <div class="bpmn-container">
    <div ref="canvas" class="bpmn-canvas"></div>
    <div ref="propertiesPanel" class="properties-panel"></div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
  import BpmnModeler from 'bpmn-js/lib/Modeler'
  import 'bpmn-js/dist/assets/diagram-js.css'
  import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'

  import { BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } from 'bpmn-js-properties-panel'
  import '@bpmn-io/properties-panel/dist/assets/properties-panel.css'
  import CamundaModdle from 'camunda-bpmn-moddle/resources/camunda'

  // 定义 props
  const props = defineProps({
    xml: {
      type: String,
      required: true
    }
  })

  // 引用元素
  const canvas = ref(null)
  const propertiesPanel = ref(null)
  let bpmnModeler = null

  // 初始化 BPMN 建模器
  onMounted(() => {
    bpmnModeler = new BpmnModeler({
      container: canvas.value,
      propertiesPanel: {
        parent: propertiesPanel.value
      },
      additionalModules: [BpmnPropertiesPanelModule, BpmnPropertiesProviderModule],
      moddleExtensions: {
        camunda: CamundaModdle // 启用 Camunda 扩展
      }
    })

    // 监听 XML 变化
    watch(
      () => props.xml,
      newXml => {
        if (newXml) {
          bpmnModeler.importXML(newXml).catch(err => {
            console.error('Error importing BPMN diagram:', err)
          })
        }
      },
      { immediate: true }
    )
  })

  // 组件销毁前清理
  onBeforeUnmount(() => {
    if (bpmnModeler) {
      bpmnModeler.destroy()
    }
  })
</script>

<style scoped>
  .bpmn-container {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .bpmn-canvas {
    flex: 1;
    height: 100%;
    position: relative;
    border: 1px solid #ccc;
  }

  .properties-panel {
    width: 300px;
    height: 100%;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    background-color: #f8f8f8;
    padding: 10px;
    box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
  }

  :deep(.bjs-powered-by) {
    display: none;
  }

  :deep(.djs-palette) {
    top: 10px;
    left: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  :deep(.djs-container) {
    width: 100% !important;
    height: 100% !important;
  }

  :deep(.canvas) {
    width: 100% !important;
    height: 100% !important;
  }
</style>
