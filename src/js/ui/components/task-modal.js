import { get, create } from "/src/js/utils/fluent";
import Button from "/src/js/ui/components/button.js";
import flagIcon from "/src/img/flag.svg";
import dueDateIcon from "/src/img/duedate.svg";
import textIcon from "/src/img/text.svg";
import arrowIcon from "/src/img/downarrow.svg";
import DatePicker from "air-datepicker";

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

  static openCalendar() {
    toggleContent("60vh", "40vh");

    get(".buttons-content-container")
      .clear()
      .child(create("div").class("calendar-container").build());
    new DatePicker(".calendar-container", []);
  }

  static openPriorities() {
    toggleContent("35vh", "10vh");

    let radios = ["Low", "Medium", "High"];
    let radioDivs = [];

    radios.forEach((radio) => {
      radioDivs.push(
        create("div")
          .class("radio-container", radio)
          .child(
            create("input").type("radio").id(radio).name("priority").build(),
            create("label").for(radio).content(radio).build(),
          )
          .build(),
      );
    });

    const content = create("div")
      .class("priorities-container")
      .child(...radioDivs)
      .build();

    get(".buttons-content-container").clear().child(content);
  }

  static openDescription() {
    toggleContent("40vh", "50vh");
    get(".buttons-content-container")
      .clear()
      .child(
        create("textarea")
          .class("description-input")
          .placeholder("Description")
          .build(),
      );
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

function toggleContent(modalHeight, contentHeight) {
  const modalDiv = document.querySelector(".add-task-dialog");
  const contentDiv = document.querySelector(".buttons-content-container");

  if (contentDiv.style.height == contentHeight) {
    contentDiv.style.height = "0%";
    modalDiv.style.height = "23vh";
    contentDiv.style.borderBottom = "";
    return;
  }

  modalDiv.style.height = modalHeight;
  contentDiv.style.height = contentHeight;
  contentDiv.style.borderBottom = "1px solid var(--light-gray)";
}
