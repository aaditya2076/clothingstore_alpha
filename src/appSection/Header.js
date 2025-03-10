export default class Header {
  static header = document.createElement("header");
  static init() {
    fetch("/templates/html/app-section/header.html")
      .then((res) => res.text())
      .then((html) => {
        this.header.innerHTML = html;
        const hamburger_btn = document.querySelector(".hamburger");
        const mobile_navbar = document.querySelector(
          ".mobile_navbar_container"
        );

        hamburger_btn.addEventListener("click", () => {
          console.log("Event clicked");
          mobile_navbar.style.transform = "translateX(0)";
        });

        const cross_btn = document.querySelector(".mobile_header_btn");
        cross_btn.addEventListener("click", () => {
          mobile_navbar.style.transform = "translateX(-100%)";
        });
      })
      .catch((err) => console.log(err));
    return this.header;
  }
}
