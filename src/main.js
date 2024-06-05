import { createApp } from "vue";
import App from "./App.vue";

import "./styles/index";
import router from "./router";
import pinia from "./stores";
import i18n from "./locale";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(i18n);
app.mount("#app");
