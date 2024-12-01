function create(tag) {
  return {
    element: document.createElement(tag),

    class(...classes) {
      this.element.classList.add(...classes);
      return this;
    },

    placeholder(str) {
      this.element.placeholder = str;
      return this;
    },

    value(str) {
      this.element.value = str;
      return this;
    },

    type(str) {
      this.element.type = str;
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

function get(tag) {
  return {
    element: document.querySelector(tag),

    class(...classes) {
      this.element.classList.add(...classes);
      return this;
    },

    placeholder(str) {
      this.element.placeholder = str;
      return this;
    },

    value(str) {
      this.element.value = str;
      return this;
    },

    type(str) {
      this.element.type = str;
      return this;
    },

    click(func) {
      this.element.addEventListener("click", () => {
        func();
      });
      return this;
    },

    keyPressed(key, func) {
      this.element.addEventListener("keydown", (e) => {
        if (e.key == key) {
          func();
        }
      });
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
  };
}

export { create, get };
