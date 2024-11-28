import { get, create } from "/src/js/utils/fluent";
import Button from "/src/js/ui/components/button.js";
import flagIcon from "/src/img/flag.svg";
import dueDateIcon from "/src/img/duedate.svg";
import textIcon from "/src/img/text.svg";
import arrowIcon from "/src/img/downarrow.svg";

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

    const submitContainer = create("div")
      .class("task-submit-container")
      .child(
        new Button(
          "project-button",
          "project-img",
          "Project",
          arrowIcon,
        ).intoNode(),
        create("input").type("submit").class("submit-button").build(),
      )
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
