import SideBar from "./components/sidebar.js";
import Section from "./components/section.js";
import TopBar from "./components/topbar.js";

export default class {
  static render() {
    SideBar.render();
    TopBar.render();
    Section.render();
  }
}
