<template>
  <div class="doc-container">
    <h1>DragResizeGrid 可拖拽调整大小的网格</h1>
    <p class="description">一个支持拖拽调整大小的网格组件，可以用于构建可自定义的布局系统。</p>

    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-block">
        <DragResizeGrid :value="dragData">
          <template #cell="{ row, col }">
            <div class="grid-cell">单元格 {{ row }}-{{ col }}</div>
          </template>
        </DragResizeGrid>
      </div>
      <div class="code-block">
        <pre><code>{{ basicUsage }}</code></pre>
      </div>
    </section>

    <section class="demo-section">
      <h2>自定义单元格内容</h2>
      <div class="demo-block">
        <DragResizeGrid :value="[]">
          <template #cell="{ row, col }">
            <div class="custom-cell">
              <h3>自定义内容</h3>
              <p>行: {{ row }}</p>
              <p>列: {{ col }}</p>
            </div>
          </template>
        </DragResizeGrid>
      </div>
      <div class="code-block">
        <pre><code>{{ customContent }}</code></pre>
      </div>
    </section>

    <section class="api-section">
      <h2>API</h2>

      <h3>属性</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>属性名</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>rows</td>
            <td>网格行数</td>
            <td>number</td>
            <td>3</td>
          </tr>
          <tr>
            <td>cols</td>
            <td>网格列数</td>
            <td>number</td>
            <td>3</td>
          </tr>
          <tr>
            <td>cellHeight</td>
            <td>单元格高度</td>
            <td>number</td>
            <td>100</td>
          </tr>
          <tr>
            <td>cellWidth</td>
            <td>单元格宽度</td>
            <td>number</td>
            <td>100</td>
          </tr>
          <tr>
            <td>gap</td>
            <td>单元格间距</td>
            <td>number</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>

      <h3>插槽</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>插槽名</th>
            <th>说明</th>
            <th>作用域参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cell</td>
            <td>单元格内容</td>
            <td>{ row: number, col: number }</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { DragResizeGrid } from '@/components'
  import CardComponent from './components/Card.vue'

  const dragData = ref([
    {
      component: markRaw(CardComponent)
    },
    {
      component: markRaw(CardComponent)
    },
    {
      component: markRaw(CardComponent)
    },
    {
      component: markRaw(CardComponent)
    }
  ])

  const basicUsage = `<template>
    <DragResizeGrid
      :rows="3"
      :cols="3"
      :cell-height="100"
      :cell-width="100"
      :gap="10"
    >
      <template #cell="{ row, col }">
        <div class="grid-cell">
          单元格 {{ row }}-{{ col }}
        </div>
      </template>
    </DragResizeGrid>
  </template>`

  const customContent = `<template>
    <DragResizeGrid
      :rows="2"
      :cols="2"
      :cell-height="150"
      :cell-width="150"
      :gap="20"
    >
      <template #cell="{ row, col }">
        <div class="custom-cell">
          <h3>自定义内容</h3>
          <p>行: {{ row }}</p>
          <p>列: {{ col }}</p>
        </div>
      </template>
    </DragResizeGrid>
  </template>`
</script>

<style lang="scss" scoped>
  .doc-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;

    h1 {
      font-size: 28px;
      margin-bottom: 16px;
    }

    .description {
      font-size: 16px;
      color: #666;
      margin-bottom: 32px;
    }
  }

  .demo-section {
    margin-bottom: 48px;

    h2 {
      font-size: 24px;
      margin-bottom: 24px;
    }
  }

  .demo-block {
    padding: 24px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .code-block {
    background-color: #f5f7fa;
    padding: 16px;
    border-radius: 4px;

    pre {
      margin: 0;
      code {
        font-family: 'Courier New', Courier, monospace;
      }
    }
  }

  .api-section {
    h2 {
      font-size: 24px;
      margin-bottom: 24px;
    }

    h3 {
      font-size: 20px;
      margin: 24px 0 16px;
    }
  }

  .api-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 24px;

    th,
    td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #e8e8e8;
    }

    th {
      background-color: #fafafa;
      font-weight: 500;
    }
  }

  .grid-cell {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    border-radius: 4px;
  }

  .custom-cell {
    width: 100%;
    height: 100%;
    padding: 16px;
    background-color: #e6f7ff;
    border-radius: 4px;

    h3 {
      margin: 0 0 8px;
      font-size: 16px;
    }

    p {
      margin: 4px 0;
      font-size: 14px;
    }
  }
</style>
