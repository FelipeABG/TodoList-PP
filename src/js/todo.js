export default class {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  attrIter() {
    return [
      { name: "title", data: this.title },
      { name: "description", data: this.description },
      { name: "dueDate", data: this.dueDate },
      { name: "priority", data: this.priority },
    ];
  }
}
