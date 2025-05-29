<template>
  <div class="doc-layout">
    <aside class="doc-sidebar">
      <div class="logo">
        <h1>组件库文档</h1>
      </div>
      <nav class="menu">
        <div class="menu-group">
          <div class="menu-title">基础组件</div>
          <router-link to="/button" class="menu-item">Button 按钮</router-link>
        </div>
        <div class="menu-group">
          <div class="menu-title">布局组件</div>
          <router-link to="/drag-resize-grid" class="menu-item">Grid 栅格</router-link>
        </div>
        <div class="menu-group">
          <div class="menu-title">流程组件</div>
          <router-link to="/bpmn" class="menu-item">BPMN 流程图</router-link>
        </div>
      </nav>
    </aside>
    <main class="doc-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
  // 组件逻辑
</script>

<style lang="scss" scoped>
  .doc-layout {
    display: flex;
    min-height: 100vh;
    background-color: #f5f7fa;
  }

  .doc-sidebar {
    width: 260px;
    background-color: #fff;
    border-right: 1px solid #e8e8e8;
    padding: 20px 0;
    position: fixed;
    height: 100vh;
    overflow-y: auto;

    .logo {
      padding: 0 24px;
      margin-bottom: 24px;

      h1 {
        font-size: 20px;
        color: #333;
        margin: 0;
      }
    }

    .menu {
      .menu-group {
        margin-bottom: 24px;

        .menu-title {
          padding: 8px 24px;
          color: #999;
          font-size: 14px;
        }

        .menu-item {
          display: block;
          padding: 12px 24px;
          color: #333;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s;

          &:hover {
            color: #1890ff;
            background-color: #f5f7fa;
          }

          &.router-link-active {
            color: #1890ff;
            background-color: #e6f7ff;
            border-right: 3px solid #1890ff;
          }
        }
      }
    }
  }

  .doc-content {
    flex: 1;
    margin-left: 260px;
    padding: 24px;
  }
</style>
