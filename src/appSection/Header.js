export default class Header {
  static header = document.createElement("header");
  static init() {
    fetch("/templates/html/app-section/header.html")
      .then((res) => res.text())
      .then((html) => {
        this.header.innerHTML = html;
      })
      .catch((err) => console.log(err));
    return this.header;
  }
}
