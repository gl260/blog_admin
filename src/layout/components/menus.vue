<template>
  <div class="layout-menus">
    <el-menu :default-active="menuActive" background-color="transparent" unique-opened>
      <!-- <el-menu-item index="1" @click="goBack('/')">
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
      </el-sub-menu> -->
      <template v-for="(item, index) in mapMenuTree">
        <template v-if="item.child && item.child.length">
          <el-sub-menu :key="index" :index="index">
            <template #title>
              <i class="i-menu-icon iconfont" :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="(v, i) in item.child">
              <el-menu-item :index="`${index}-${i}`" @click="goBack(v.path, `${index}-${i}`)">{{ v.title }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :key="index" :index="index" @click="goBack(item.path, index)">
            <i class="i-menu-icon iconfont" :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { storage } from "@/utils/index.js";
import { useRouter } from "vue-router";
import menus from "./menus";
import useMainStore from "@/stores/main.js";
const useMain = useMainStore();
const { menuActive } = storeToRefs(useMain);
console.log("menuActive", menuActive);

const mapMenuTree = ref(menus);

// 路由跳转
const router = useRouter();
const goBack = (path, idx) => {
  console.log(idx);
  storage("menuActive", idx);
  router.push(path);
};
</script>

<style lang="scss" scoped>
.layout-menus {
  height: 100%;
  background-image: linear-gradient(#7960eb, #ba9aca);
  box-shadow: inset 0px 5px 12px 0px rgba(0, 0, 0, 0.2);
  overflow: auto;
  .el-menu {
    border-right: none;
    li {
      color: #fff;
    }
  }
  :deep(.el-sub-menu__title) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.35) !important;
    }
    color: #fff;
  }
  :deep(.el-menu-item:hover) {
    background-color: rgba(255, 255, 255, 0.35);
  }
  .el-menu-item.is-active {
    background-color: rgba(255, 255, 255, 0.35);
  }
}
.i-menu-icon {
  margin-right: 16px;
  display: inline-block;
  font-size: 18px;
  text-align: center;
}
</style>
