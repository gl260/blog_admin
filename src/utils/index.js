export function storage() {
  if (!arguments.length) return;

  if (arguments.length === 1) {
    const b = window.localStorage.getItem(arguments[0]);

    try {
      return JSON.parse(b);
    } catch (e) {
      return b;
    }
  } else {
    if (typeof arguments[1] === "object") {
      window.localStorage.setItem(arguments[0], JSON.stringify(arguments[1]));
    } else {
      window.localStorage.setItem(arguments[0], arguments[1]);
    }
  }
}

export const supportLanguages = ["zh", "en", "ja"];

// 检测浏览器语言
export function getBrowserLang() {
  /*  zh:中文 en:英语 ja: 日语 */
  const broserLang = navigator.language || navigator["systemLanguage"] || navigator["browserLanguage"] || "en";
  const lang = broserLang.split("-")[0].toLowerCase();
  const has = supportLanguages.some((v) => lang.includes(v));

  return has ? lang : "en";
}
