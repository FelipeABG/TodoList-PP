import create from "./fluent.js";

export default class {
  static parseTodo(todo) {
    const todoDiv = create("div").class("todo").build();

    todo.attrIter().forEach((attr) => {
      const node = create("div")
        .class("todo-" + attr.name)
        .content(attr.data)
        .build();

      todoDiv.appendChild(node);
    });

    return todoDiv;
  }

  static showSideBar() {
    document.querySelector(".side-bar-container").style.width = "20%";
    document.querySelector(".main-container").style.width = "80%";
  }

  static hideSideBar() {
    document.querySelector(".side-bar-container").style.width = "0%";
    document.querySelector(".main-container").style.width = "100%";
  }
}
