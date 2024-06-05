<template>
  <div class="layout-header">
    <div class="layout-header-logo">logo</div>
    <div class="layout-header-content">
      <layout-dark />
      <layout-language />
      <layout-user />
    </div>
  </div>
</template>

<script setup>
import LayoutUser from "./user.vue";
import LayoutLanguage from "./language.vue";
import LayoutDark from "./dark.vue";
</script>

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
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 16px;
  }
  .layout-header-content > div {
    margin-left: 16px;
    cursor: pointer;
  }
}
</style>
<style lang="scss">
.layout-round {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #f5f7fa;
  color: #606266;
  border-radius: 50%;
}
.el-tooltip__trigger {
  outline: none;
}
</style>
