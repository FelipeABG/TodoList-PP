import create from "./utils.js";

export default class {
  static parseTodo(todo) {
    const todoDiv = create("div").class("todo").build();

    const title = create("div").class("todo-title").content(todo.title).build();

    const description = create("div")
      .class("todo-description")
      .content(todo.description)
      .build();

    const dueDate = create("div")
      .class("todo-dueDate")
      .content(todo.dueDate)
      .build();

    const priority = create("div")
      .class("todo-priority")
      .content(todo.priority)
      .build();

    todoDiv.append(title, description, dueDate, priority);
    return todoDiv;
  }
}
