<template>
  <div class="layout-menus">
    <el-menu default-active="1" unique-opened>
      <el-menu-item index="1" @click="goBack('/')">
        <i class="i-menu-icon iconfont icon-home"></i>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <i class="i-menu-icon iconfont icon-type"></i>
          <span>类别</span>
        </template>
        <el-menu-item index="2-1" @click="goBack('/category/asus')">华硕</el-menu-item>
        <el-menu-item index="2-2">拯救者</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <i class="i-menu-icon iconfont icon-cpu"></i>
          <span>处理器</span>
        </template>
        <el-menu-item index="3-1">AMD</el-menu-item>
        <el-menu-item index="3-2">Intel</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import menus from "./menus";
import useMenuStore from "@/stores/menu";
const useMenu = useMenuStore();

// console.log("sidebar", aa, useMenu.sidebar);

const item = ref(menus);

const recursion = () => {
  const arr = [];
};
const mapNewMenus = () => {};
console.log("item", item.value);

// 路由跳转
const router = useRouter();
const goBack = (path) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
.i-menu-icon {
  margin-right: 16px;
  display: inline-block;
  font-size: 18px;
  text-align: center;
}
</style>
