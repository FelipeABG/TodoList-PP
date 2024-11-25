function create(tag) {
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

export { create };
