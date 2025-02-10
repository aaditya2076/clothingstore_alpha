export default class AppLayout {
  static init() {
    const appElement = document.querySelector("#app");
    appElement.innerHTML = `<nav><a href="#">navbar</a></nav>`;
  }
}
