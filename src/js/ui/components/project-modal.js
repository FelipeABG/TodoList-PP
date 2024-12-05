import { get, create } from "/src/js/utils/fluent";

export default class {
  static render() {
    get(".new-project-container").child(
      create("div")
        .class("project-input-container")
        .child(this.#renderInput())
        .build(),
      create("div")
        .class("project-button-container")
        .child(this.#renderButton())
        .build(),
    );
  }

  static openProjectModal() {
    document.querySelector(".new-project-dialog").showModal();
  }

  static #renderInput() {
    return create("input")
      .type("text")
      .placeholder("Project name")
      .class("project-input")
      .build();
  }

  static #renderButton() {
    return create("input")
      .type("submit")
      .value("Create Project")
      .class("project-submit")
      .build();
  }
}
