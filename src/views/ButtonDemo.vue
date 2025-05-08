<template>
  <div class="button-demo">
    <h1>MyButton 组件示例</h1>

    <div class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-row">
        <MyButton color="primary">主要按钮</MyButton>
        <MyButton color="secondary">次要按钮</MyButton>
      </div>
    </div>

    <div class="demo-section">
      <h2>点击事件</h2>
      <div class="demo-row">
        <MyButton color="primary" @click="handleClick">点击我</MyButton>
        <span class="click-count">点击次数: {{ clickCount }}</span>
      </div>
    </div>

    <div class="demo-section">
      <h2>插槽内容</h2>
      <div class="demo-row">
        <MyButton color="primary">
          <template #default>
            <span class="custom-content">
              <i class="icon">🚀</i>
              自定义内容
            </span>
          </template>
        </MyButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { MyButton } from "../components";

  const clickCount = ref(0);

  const handleClick = () => {
    clickCount.value++;
    console.log("按钮被点击了！");
  };
</script>

<style lang="scss" scoped>
  .button-demo {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;

    h1 {
      color: #333;
      margin-bottom: 30px;
      text-align: center;
    }

    .demo-section {
      margin-bottom: 40px;
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 8px;
      background-color: #fff;

      h2 {
        color: #666;
        margin-bottom: 20px;
        font-size: 18px;
      }
    }

    .demo-row {
      display: flex;
      gap: 20px;
      align-items: center;
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
