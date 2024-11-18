import UI from "./ui";

export default class {
  static build() {
    this.#addSideBarBehavior();
  }

  static #addSideBarBehavior() {
    document
      .querySelector(".open-side-bar-button")
      .addEventListener("click", () => UI.showSideBar());

    document
      .querySelector(".close-side-bar-button")
      .addEventListener("click", () => UI.hideSideBar());
  }
}
