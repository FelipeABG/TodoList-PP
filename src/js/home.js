import UI from "./ui";
import sideBarIcon from "../img/siderbar.svg";
import profileIcon from "../img/profile.svg";

export default class {
  static build() {
    this.#renderIcons();
    this.#addSideBarAccess();
  }

  static #addSideBarAccess() {
    document
      .querySelector(".toggle-side-bar-button")
      .addEventListener("click", () => UI.toggleSideBar());
  }

  static #renderIcons() {
    document.querySelector(".toggle-side-bar-button").src = sideBarIcon;
    document.querySelector(".profile-icon").src = profileIcon;
  }
}
