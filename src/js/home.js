import UI from "/src/js/ui/ui.js";

export default class {
  static build() {
    this.#addSideBarAccess();
  }

  static #addSideBarAccess() {
    document
      .querySelector(".toggle-side-bar-button")
      .addEventListener("click", () => UI.toggleSideBar());
  }
}
