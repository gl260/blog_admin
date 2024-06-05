<template>
  <el-dropdown @command="command">
    <div class="layout-round"><i class="iconfont icon-duoyuyan"></i></div>
    <template #dropdown>
      <el-dropdown-item command="en">English</el-dropdown-item>
      <el-dropdown-item command="zh">中文</el-dropdown-item>
      <el-dropdown-item command="ja">日本語</el-dropdown-item>
    </template>
  </el-dropdown>
</template>

<script setup>
import { setLanguage } from "@/locale";
const command = (v) => {
  setLanguage(v);
};
</script>

<style lang="scss" scoped></style>
