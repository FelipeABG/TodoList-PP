import { get, create } from "/src/js/utils/fluent";

export default class {
  static render() {
    this.#renderTaskModal();
    this.#renderProjectModal();
  }

  static #renderTaskModal() {
    const container = get(".add-task-container");

    const inputContainer = create("div")
      .class("task-input-container")
      .child(
        create("input").class("task-input").placeholder("Task name").build(),
      )
      .build();

    const buttonsContainer = create("div")
      .class("task-buttons-container")
      .build();

    const submitContainer = create("div")
      .class("task-submit-container")
      .build();

    container.child(inputContainer, buttonsContainer, submitContainer);
  }

  static #renderProjectModal() {}

  static openTaskModal() {
    document.querySelector(".add-task-dialog").showModal();
  }

  static openProjectModal() {
    document.querySelector(".new-project-dialog").showModal();
  }
}
