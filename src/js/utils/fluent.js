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

    name(str) {
      this.element.name = str;
      return this;
    },

    id(str) {
      this.element.id = str;
      return this;
    },

    for(id) {
      this.element.htmlFor = id;
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

    remove(cls) {
      this.element.classList.remove(cls);
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

    clear() {
      this.element.innerHTML = "";
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

    value(str) {
      this.element.value = str;
      return this;
    },

    show() {
      this.element.style.display = "none";
      return this;
    },

    hide() {
      this.element.style.display = "flex";
      return this;
    },

    height(value) {
      this.element.style.height = value;
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
