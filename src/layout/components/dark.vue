<script setup>
import { ref } from "vue";
import { storage } from "@/utils";
import { useDark, useToggle } from "@vueuse/core";

const isDark = ref(storage("useDarkKEY") == "dark" ? true : false);

const dark = useDark({
  // 存储到localStorage中的Key
  storageKey: "useDarkKEY",
  // 暗黑class名字
  valueDark: "dark",
  // 高亮class名字
  valueLight: "light",
});

const delay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(true);
    }, 1500);
  });
};

const toggle = useToggle(dark);
</script>

<template>
  <div class="dark">
    <el-switch v-model="isDark" :before-change="delay" @change="toggle">
      <template #active-action>
        <span><i class="iconfont icon-yueliang"></i></span>
      </template>
      <template #inactive-action>
        <span><i class="iconfont icon-Sunny"></i></span>
      </template>
    </el-switch>
  </div>
</template>

<style lang="scss" scoped>
.dark {
  :deep(.el-switch__core) {
    background: #f2f2f2;
    border-color: #dcdfe6;
    span {
      background: #f2f2f2;
    }
    .el-switch__action {
      color: #cfd3dc;
    }
  }
  :deep(.is-checked .el-switch__core) {
    background: #2c2c2c;
    border-color: #4c4d4f;
    span {
      background: #141414;
    }
    .el-switch__action {
      color: #cfd3dc;
    }
  }
  span {
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
}
</style>
