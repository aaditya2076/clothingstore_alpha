import Header from "./appSection/Header";

export default class AppLayout {
  static init() {
    const appElement = document.querySelector("#app");
    appElement.appendChild(Header.init());
  }
}
