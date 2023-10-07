<template>
  <div class="layout-view-wrapper">
    <div class="layout-header-wrap flex-bt-ct">
      <div class="layout-header-left flex-bt-ct">logo</div>
      <div class="layout-header-right flex-bt-ct">一级路由</div>
    </div>
    <div class="layout-content-wrap">
      <div class="sidebar-wrap">二级路由</div>
      <div class="layout-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import useMainStore from "@/stores/main/main.js";
import { storeToRefs } from "pinia";
import { onUnmounted } from "vue";

const mainStore = useMainStore();
const { isHome } = storeToRefs(mainStore);

// 是否在首页
isHome.value = true;
onUnmounted(() => {
  isHome.value = false;
});
</script>

<style lang="less" scoped>
.flex-bt-ct {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.layout-view-wrapper {
  display: flex;
  height: 100vh;
  flex-direction: column;
  // color: #fff;
}
.layout-header-wrap {
  height: 60px;
  background-color: #fff;
  padding: 0 16px 0 0;

  &.dark {
    background-image: linear-gradient(#130a40, #1f1059);
  }

  .layout-header-left {
    height: inherit;
  }

  .layout-header-right > div {
    margin-left: 16px;
    cursor: pointer;
  }
}

.layout-content-wrap {
  flex: 1;
  display: flex;
  box-shadow: inset 0px 5px 12px 0px rgba(0, 0, 0, 0.2);
  background-color: #f5f7fb;
  overflow: hidden;

  &.dark {
    background-image: linear-gradient(#130a40, #1f1059);
  }

  .sidebar-wrap {
    width: 200px;
    background-image: linear-gradient(#3929af, rgb(79, 133, 226));
    box-shadow: inset 0px 5px 12px 0px rgba(0, 0, 0, 0.2);
    // z-index: 200;
    z-index: 99;
    overflow: auto;
  }

  .layout-container {
    flex: 1;
    overflow: hidden auto;
    box-sizing: border-box;
    padding: 16px;
    color: #303133;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .card-page {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    background-color: #fff;
  }
}
</style>
