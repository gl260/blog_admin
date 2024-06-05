import { createApp } from "vue";
import App from "./App.vue";

import "./styles/index";
// import "element-plus/theme-chalk/dark/css-vars.css";
import router from "./router";
import pinia from "./stores";
import i18n from "./locale";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(i18n);
app.mount("#app");
