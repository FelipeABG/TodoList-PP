export default class {
  static parseTodo(todo) {
    const todoDiv = document.createElement("div");

    const title = document.createElement("div");
    const description = document.createElement("div");
    const dueDate = document.createElement("div");
    const priority = document.createElement("div");

    todoDiv.append(title, description, dueDate, priority);
    return todoDiv;
  }
}
