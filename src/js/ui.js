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
}
