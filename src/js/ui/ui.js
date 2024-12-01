import SideBar from "./components/sidebar.js";
import Section from "./components/section.js";
import TopBar from "./components/topbar.js";
import Modal from "./components/task-modal.js";
import { get } from "/src/js/utils/fluent";

export default class {
  static render() {
    Modal.render();
    SideBar.render();
    TopBar.render();
    Section.render();
  }

  static addInteraction() {
    this.#addSideBarAccess();
    this.#addModalAccess();
  }

  static #addSideBarAccess() {
    get(".toggle-side-bar-button").click(SideBar.toggleSideBar);
  }

  static #addModalAccess() {
    get(".add-task-button").click(Modal.openTaskModal);
  }
}
