<template>
  <div class="login">
    <div class="container" ref="containerRef">
      <transition name="image" mode="out-in">
        <template v-if="flag">
          <img class="login-image image" src="@/assets/img/login/login.jpg" alt="登录" />
        </template>
        <template v-else>
          <img class="register-image image" src="@/assets/img/login/register.jpg" alt="注册" />
        </template>
      </transition>

      <!-- 登录 -->
      <div class="login-box" ref="boxRef">
        <div class="top-tips">
          <span class="text">SING JUMP RAP</span>
          <span class="top-tips-btn" type="primary" @click="changeBtn" ref="changeBtnRef">
            注册
          </span>
        </div>
        <h1 class="h1-text" ref="h1Ref">登录</h1>
        <div class="other-login">
          <span>其他方式登录</span>
        </div>

        <transition name="login" mode="out-in">
          <component :is="flag ? LoginForm : RegisterForm"></component>
        </transition>
      </div>

      <!-- 注册 -->
      <div class="register-box"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import LoginForm from "./cpns/login-form.vue";
import RegisterForm from "./cpns/register-form.vue";

const flag = ref(true);
const containerRef = ref();
const h1Ref = ref();
const boxRef = ref();
const changeBtnRef = ref();

// onMounted(() => {
  // console.log(h1Ref.value.innerHTML);
  // changeBtnRef.value.style.color = "red";
// });

const changeBtn = () => {
  flag.value = !flag.value;
  if (flag.value) {
    changeBtnRef.value.innerHTML = "注册";
    h1Ref.value.innerHTML = "登录";
    containerRef.value.style.height = "85vh";
    containerRef.value.style.backgroundColor = "#e1d7e6";
    boxRef.value.style.height = "70vh";
  } else {
    changeBtnRef.value.innerHTML = "登录";
    h1Ref.value.innerHTML = "注册";
    containerRef.value.style.height = "90vh";
    containerRef.value.style.backgroundColor = "#9a98d0";
    boxRef.value.style.height = "80vh";
  }
};

// import useLoginStore from "@/stores/login/login"; #9a98d0
// import { storeToRefs } from "pinia";
// const loginStore = useLoginStore();
// const { counter } = storeToRefs(loginStore);
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #33266e;
  width: 100vw;
  height: 100vh;
  .container {
    position: relative;
    background-color: #e1d7e6;
    border-radius: 40px;
    width: 90vw;
    height: 85vh;
    transition: 1s; // 过渡动画 高度和背景色
    display: flex;
    align-items: center;
    .image {
      position: absolute;
      left: 5%;
      transform: 1s;
    }
    .login-image {
      width: 45%;
      height: 90%;
      border-radius: 15%;
      // animation: imageAnim 1s ease;
    }
    .register-image {
      width: 45%;
      // opacity: 0;
      border-radius: 15%;
      // animation: imageAnim 1s ease reverse;
    }
    .login-box {
      position: absolute;
      width: 30vw;
      height: 70vh;
      transition: height 1s; // 过渡动画
      border-radius: 40px;
      background: rgba(244, 240, 245, 0.6);
      box-sizing: border-box;
      padding: 60px;
      right: 10%;
      .top-tips {
        display: flex;
        justify-content: space-between;
        .text {
          font-size: 25px;
          font-weight: 600;
        }
        .top-tips-btn {
          font-size: 15px;
          color: rgb(79, 133, 226);
          border-bottom: 1px solid rgb(79, 133, 226);
          cursor: pointer;
        }
      }
      .h1-text {
        font-size: 45px;
        margin: 20px 0;
      }
      .other-login {
        width: 60%;
        height: 45px;
        border-radius: 10px;
        text-align: center;
        line-height: 45px;
        font-size: 20px;
        color: #fff;
        margin: 20px 0;
        background-color: rgb(79, 133, 226);
        padding-bottom: 2px;
        cursor: pointer;
      }
    }
  }
}
.login-enter-from,
.login-leave-to {
  opacity: 0;
}
.login-enter-to,
.login-leave-from {
  opacity: 1;
}
.login-enter-active {
  // animation: LoginAnim 1s ease;
  transition: opacity 0.3s ease;
}
.login-leave-active {
  // animation: LoginAnim 1s ease reverse;
  transition: opacity 0.3s ease;
}
@keyframes LoginAnim {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

.image-enter-from,
.image-leave-to {
  opacity: 0;
}
.image-enter-to,
.image-leave-from {
  opacity: 1;
}
.image-enter-active {
  transition: opacity 1s ease;
}
.login-leave-active {
  transition: opacity 1s ease;
}
</style>
