<template>
  <div class="login-form">
    <el-form>
      <div class="text-tips">
        <span class="account">账号</span>
      </div>
      <el-form-item>
        <el-input size="large" />
      </el-form-item>

      <div class="text-tips">
        <span class="psw">密码</span>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-form-item>
        <el-input size="large" />
      </el-form-item>
    </el-form>
    <el-button class="login-btn" color="#3a3a3a">登录</el-button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.login-form {
  .text-tips {
    color: rgb(123, 122, 123);
    margin: 5px;
    display: flex;
    justify-content: space-between;
  }
}
.login-btn {
  margin-top: 10px;
  padding: 8px 36px;
}
</style>
