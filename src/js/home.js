import Modal from "/src/js/ui/components/modal";
import SideBar from "/src/js/ui/components/sidebar";
import { get } from "./utils/fluent.js";

export default class {
  static build() {
    this.#addSideBarAccess();
    this.#addModalAccess();
  }

  static #addSideBarAccess() {
    //Ui button
    get(".toggle-side-bar-button").click(SideBar.toggleSideBar);

    //Key bind
    get("body").keyPressed("Tab", SideBar.toggleSideBar);
  }

  static #addModalAccess() {
    //Ui Buttons
    get(".add-task-button").click(Modal.openTaskModal);
    get(".new-project-button").click(Modal.openProjectModal);

    //Key Binds
    get("body").keyPressed("t", Modal.openTaskModal);
    get("body").keyPressed("p", Modal.openProjectModal);
  }
}
