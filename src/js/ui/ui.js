import SideBar from "./components/sidebar.js";
import Section from "./components/section.js";
import TopBar from "./components/topbar.js";
import TaskModal from "./components/task-modal.js";
import { get } from "/src/js/utils/fluent";

export default class {
  static render() {
    TaskModal.render();
    SideBar.render();
    TopBar.render();
    Section.render();
  }

  static addInteraction() {
    this.#addSideBarAccess();
    this.#addModalAccess();
    this.#addTaskButtonsContentAccess();
  }

  static #addSideBarAccess() {
    get(".toggle-side-bar-button").click(SideBar.toggleSideBar);
  }

  static #addModalAccess() {
    get(".add-task-button").click(TaskModal.openTaskModal);
  }

  static #addTaskButtonsContentAccess() {
    get(".due-date-button").click(TaskModal.openCalendar);
    get(".priority-button").click(TaskModal.openPriorities);
    get(".description-button").click(TaskModal.openDescription);
  }
}
