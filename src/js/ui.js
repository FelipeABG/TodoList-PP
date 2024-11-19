export default class {
  static createImage(image, className) {
    return this.create("img").class(className).source(image).build();
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

  static create(tag) {
    return {
      element: document.createElement(tag),

      class(...classes) {
        this.element.classList.add(...classes);
        return this;
      },

      content(str) {
        this.element.innerText = str;
        return this;
      },

      child(...children) {
        this.element.append(...children);
        return this;
      },

      source(path) {
        this.element.src = path;
        return this;
      },

      build() {
        return this.element;
      },
    };
  }
}
