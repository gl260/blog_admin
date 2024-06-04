<template>
  <div class="layout-header">
    <div class="layout-header-logo">logo</div>
    <div class="layout-header-content">content</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.layout-header {
  height: 60px;
  display: flex;
  .layout-header-logo {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #7960eb;
  }
  .layout-header-content {
    flex: 1;
  }
}
</style>
