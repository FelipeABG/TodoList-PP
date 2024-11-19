export default class {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  #attrIter() {
    return [
      { name: "title", data: this.title },
      { name: "description", data: this.description },
      { name: "dueDate", data: this.dueDate },
      { name: "priority", data: this.priority },
    ];
  }

  intoNode() {
    const todoDiv = create("div").class("todo").build();

    this.#attrIter().forEach((attr) => {
      const node = create("div")
        .class("todo-" + attr.name)
        .content(attr.data)
        .build();

      todoDiv.appendChild(node);
    });

    return todoDiv;
  }
}
