<template>
  <div class="button-doc">
    <h1>Button 按钮</h1>
    <p class="description">常用的操作按钮，用于触发一个即时操作。</p>

    <section class="doc-section">
      <h2>基础用法</h2>
      <p>基础的按钮用法。</p>
      <div class="demo-block">
        <div class="demo-content">
          <MyButton color="primary">主要按钮</MyButton>
          <MyButton color="secondary">次要按钮</MyButton>
        </div>
        <div class="demo-code">
          <pre><code>&lt;MyButton color="primary"&gt;主要按钮&lt;/MyButton&gt;
&lt;MyButton color="secondary"&gt;次要按钮&lt;/MyButton&gt;</code></pre>
        </div>
      </div>
    </section>

    <section class="doc-section">
      <h2>点击事件</h2>
      <p>按钮的点击事件处理。</p>
      <div class="demo-block">
        <div class="demo-content">
          <MyButton color="primary" @click="handleClick">点击我</MyButton>
          <span class="click-count">点击次数: {{ clickCount }}</span>
        </div>
        <div class="demo-code">
          <pre><code>&lt;MyButton color="primary" @click="handleClick"&gt;点击我&lt;/MyButton&gt;

const clickCount = ref(0);
const handleClick = () => {
  clickCount.value++;
};</code></pre>
        </div>
      </div>
    </section>

    <section class="doc-section">
      <h2>自定义内容</h2>
      <p>通过插槽自定义按钮内容。</p>
      <div class="demo-block">
        <div class="demo-content">
          <MyButton color="primary">
            <template #default>
              <span class="custom-content">
                <i class="icon">🚀</i>
                自定义内容
              </span>
            </template>
          </MyButton>
        </div>
        <div class="demo-code">
          <pre><code>&lt;MyButton color="primary"&gt;
  &lt;template #default&gt;
    &lt;span class="custom-content"&gt;
      &lt;i class="icon"&gt;🚀&lt;/i&gt;
      自定义内容
    &lt;/span&gt;
  &lt;/template&gt;
&lt;/MyButton&gt;</code></pre>
        </div>
      </div>
    </section>

    <section class="doc-section">
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
            <td>color</td>
            <td>按钮类型</td>
            <td>'primary' | 'secondary'</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <h3>事件</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>click</td>
            <td>点击按钮时触发</td>
            <td>(event: MouseEvent) => void</td>
          </tr>
        </tbody>
      </table>

      <h3>插槽</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>插槽名</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>default</td>
            <td>按钮内容</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { MyButton } from '../components'
  const clickCount = ref(0)

  const handleClick = () => {
    clickCount.value++
    console.log('按钮被点击了！')
  }
</script>

<style lang="scss" scoped>
  .button-doc {
    max-width: 1000px;
    margin: 0 auto;

    h1 {
      font-size: 28px;
      color: #333;
      margin-bottom: 16px;
    }

    .description {
      font-size: 16px;
      color: #666;
      margin-bottom: 32px;
    }

    .doc-section {
      margin-bottom: 48px;

      h2 {
        font-size: 22px;
        color: #333;
        margin-bottom: 16px;
        padding-bottom: 8px;
        border-bottom: 1px solid #eee;
      }

      p {
        color: #666;
        margin-bottom: 16px;
      }
    }

    .demo-block {
      border: 1px solid #eee;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 24px;

      .demo-content {
        padding: 24px;
        background-color: #fff;
        display: flex;
        gap: 16px;
        align-items: center;
      }

      .demo-code {
        background-color: #f5f7fa;
        padding: 16px;
        border-top: 1px solid #eee;

        pre {
          margin: 0;
          code {
            font-family: Consolas, Monaco, 'Andale Mono', monospace;
            font-size: 14px;
            color: #333;
          }
        }
      }
    }

    .api-table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;

      th,
      td {
        padding: 12px 16px;
        text-align: left;
        border-bottom: 1px solid #eee;
      }

      th {
        background-color: #f5f7fa;
        font-weight: 500;
        color: #333;
      }

      td {
        color: #666;
      }
    }

    .click-count {
      color: #666;
      font-size: 14px;
    }

    .custom-content {
      display: flex;
      align-items: center;
      gap: 8px;

      .icon {
        font-size: 18px;
      }
    }
  }
</style>
