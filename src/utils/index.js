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
