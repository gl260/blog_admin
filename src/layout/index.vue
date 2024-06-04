<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <layout-header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <layout-menus />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import layoutHeader from "./components/header.vue";
import layoutMenus from "./components/menus.vue";
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
}
.el-container.is-vertical {
  height: 100%;
}
.el-header {
  --el-header-padding: 0;
}
</style>
