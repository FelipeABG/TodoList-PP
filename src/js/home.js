import UI from "/src/js/ui/ui.js";
import { get } from "./utils/node.js";

export default class {
  static build() {
    this.#addSideBarAccess();
    this.#addModalAccess();
    this.#addKeyBoardShortCuts();
  }

  static #addSideBarAccess() {
    get(".toggle-side-bar-button").click(UI.toggleSideBar);
  }

  static #addModalAccess() {
    get(".add-task-button").click(UI.openTaskModal);
    get(".new-project-button").click(UI.openProjectModal);
  }

  static #addKeyBoardShortCuts() {
    get("body").keyPressed("Tab", UI.toggleSideBar);
  }
}
