<template>
  <div class="user">
    <el-dropdown>
      <div class="layout-round head-warp"></div>
      <template #dropdown>
        <el-dropdown-item command="1">修改密码</el-dropdown-item>
        <el-dropdown-item command="2">退出系统</el-dropdown-item>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.head-warp {
  background: url("@/assets/head.png") no-repeat center/cover;
}
</style>
