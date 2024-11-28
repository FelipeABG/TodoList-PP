export default class {
  static render() {
    this.#renderTaskModal();
    this.#renderProjectModal();
  }

  static #renderTaskModal() {}

  static #renderProjectModal() {}

  static openTaskModal() {
    document.querySelector(".add-task-dialog").showModal();
  }

  static openProjectModal() {
    document.querySelector(".new-project-dialog").showModal();
  }
}
