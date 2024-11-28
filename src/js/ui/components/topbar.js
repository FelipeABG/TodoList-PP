import addIcon from "/src/img/add.svg";
import { create } from "/src/js/utils/fluent";

export default class {
  static render() {
    this.#renderTopBarButtons();
  }

  static #renderTopBarButtons() {
    const topbar = document.querySelector(".top-bar-container");

    const newProjectButton = create("div")
      .class("new-project-button")
      .child(create("img").class("new-project-icon").source(addIcon).build())
      .build();

    topbar.appendChild(newProjectButton);
  }
}
