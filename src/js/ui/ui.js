import SideBar from "./components/sidebar.js";
import Section from "./components/section.js";
import TopBar from "./components/topbar.js";
import TaskModal from "./components/task-modal.js";
import ProjectModal from "./components/project-modal.js";
import { get } from "/src/js/utils/fluent";

export default class {
  static render() {
    TaskModal.render();
    ProjectModal.render();
    SideBar.render();
    TopBar.render();
    Section.render();
  }

  static interaction() {
    this.#taskModal();
    this.#modalButtonsContent();
    this.#sideBar();
    this.#projectModal();
  }

  static #sideBar() {
    get(".toggle-side-bar-button").click(SideBar.toggleSideBar);
  }

  static #taskModal() {
    get(".add-task-button").click(TaskModal.openTaskModal);
  }

  static #projectModal() {
    get(".new-project-button").click(ProjectModal.openProjectModal);
  }

  static #modalButtonsContent() {
    get(".due-date-button").click(TaskModal.openCalendar);
    get(".priority-button").click(TaskModal.openPriorities);
    get(".description-button").click(TaskModal.openDescription);
  }
}
