import UI from "./ui";

import sideBarIcon from "../img/siderbar.svg";

export default class {
  static build() {
    this.#addSideBarAccess();
  }

  static #addSideBarAccess() {
    UI.appendTo("body", UI.createImage(sideBarIcon, "toggle-side-bar-button"));

    document
      .querySelector(".toggle-side-bar-button")
      .addEventListener("click", () => UI.toggleSideBar());
  }
}
