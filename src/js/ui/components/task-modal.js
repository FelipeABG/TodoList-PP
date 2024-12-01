import { get, create } from "/src/js/utils/fluent";
import Button from "/src/js/ui/components/button.js";
import flagIcon from "/src/img/flag.svg";
import dueDateIcon from "/src/img/duedate.svg";
import textIcon from "/src/img/text.svg";
import arrowIcon from "/src/img/downarrow.svg";

export default class {
  static render() {
    const container = get(".add-task-container");

    container.child(
      this.#createInputContainer(),
      this.#createButtonsContainer(),
      this.#createButtonsContentContainer(),
      this.#createSubmitContainer(),
    );
  }

  static openTaskModal() {
    document.querySelector(".add-task-dialog").showModal();
  }

  static #createInputContainer() {
    return create("div")
      .class("task-input-container")
      .child(
        create("input").class("task-input").placeholder("Task name").build(),
      )
      .build();
  }

  static #createButtonsContainer() {
    return create("div")
      .class("task-buttons-container")
      .child(
        new Button(
          "due-date-button",
          "duedate-img",
          "Due date",
          dueDateIcon,
        ).intoNode(),
        new Button(
          "priority-button",
          "priority-img",
          "Priority",
          flagIcon,
        ).intoNode(),
        new Button(
          "description-button",
          "description-img",
          "Description",
          textIcon,
        ).intoNode(),
      )
      .build();
  }

  static #createButtonsContentContainer() {
    return create("div").class("buttons-content-container").build();
  }

  static #createSubmitContainer() {
    return create("div")
      .class("task-submit-container")
      .child(
        new Button(
          "project-button",
          "project-img",
          "Project",
          arrowIcon,
        ).intoNode(),
        create("input")
          .type("submit")
          .class("submit-button")
          .value("Create Task")
          .build(),
      )
      .build();
  }
}
