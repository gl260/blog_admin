import zh from "./zh.json";
import en from "./en.json";
import ja from "./ja.json";
import { storage, getBrowserLang } from "@/utils";
import { createI18n } from "vue-i18n";

const messages = {
  zh: { ...zh },
  en: { ...en },
  ja: { ...ja },
};

const locale = storage("language") || getBrowserLang();

const i18n = createI18n({
  legacy: false, // 使用CompotitionAPI必须添加这条
  globalInjection: true, // 全局注册 $t
  locale,
  messages,
});

// export const $t = (key) => i18n.t(key);

export function setLanguage(v) {
  storage("language", v);
  i18n.global.locale.value = v;
  return v;
}

export default i18n;
