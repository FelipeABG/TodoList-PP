import addIcon from "/src/img/add.svg";
import { create } from "../utils/fluent.js";
import SideBar from "./components/sidebar.js";
import Section from "./components/section.js";

export default class {
  static render() {
    SideBar.render();
    this.#renderTopBarButtons();
    Section.render();
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
