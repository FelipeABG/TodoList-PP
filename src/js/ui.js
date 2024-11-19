import create from "./fluent.js";

export default class {
  static createImage(image, className) {
    return create("img").class(className).source(image).build();
  }

  static appendTo(parent, ...e) {
    document.querySelector(parent).append(...e);
  }

  static toggleSideBar() {
    const sidebar = document.querySelector(".side-bar-container");
    const main = document.querySelector(".main-container");
    const button = document.querySelector(".toggle-side-bar-button");

    if (sidebar.style.width == "0%") {
      sidebar.style.width = "20%";
      main.style.width = "80%";
      button.style.left = "16%";
      return;
    }

    sidebar.style.width = "0%";
    main.style.width = "100%";
    button.style.left = "2%";
  }
}
