<template>
  <div class="register-form">
    <el-form>
      <div class="text-tips">
        <span class="account">账号</span>
      </div>
      <el-form-item>
        <el-input size="large" />
      </el-form-item>

      <div class="text-tips">
        <span class="psw">密码</span>
      </div>
      <el-form-item>
        <el-input size="large" />
      </el-form-item>

      <div class="text-tips">
        <span class="psw">确认密码</span>
      </div>
      <el-form-item>
        <el-input size="large" />
      </el-form-item>
    </el-form>
    <el-button class="register-btn" color="#3a3a3a">注册</el-button>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.register-form {
  .text-tips {
    color: rgb(123, 122, 123);
    margin: 5px;
  }
}
.register-btn {
  margin-top: 10px;
  padding: 8px 36px;
}
</style>
