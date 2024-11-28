import SideBar from "./components/sidebar.js";
import Section from "./components/section.js";
import TopBar from "./components/topbar.js";
import Modal from "./components/modal.js";

export default class {
  static render() {
    Modal.render();
    SideBar.render();
    TopBar.render();
    Section.render();
  }
}
