import sideBarIcon from "../img/siderbar.svg";
import profileIcon from "../img/profile.svg";
import profileArrow from "../img/downarrow.svg";
import notificationIcon from "../img/notification.svg";

class UI {
  static toggleSideBar() {
    const sidebar = document.querySelector(".side-bar-container");
    const main = document.querySelector(".main-container");
    const sideBarbutton = document.querySelector(".toggle-side-bar-button");
    const notificationButton = document.querySelector(".notification-button");

    if (sidebar.style.width == "0%") {
      sidebar.style.width = "20%";
      main.style.width = "80%";
      sideBarbutton.style.left = "16%";
      notificationButton.style.left = "13%";
      return;
    }

    sidebar.style.width = "0%";
    main.style.width = "100%";
    sideBarbutton.style.left = "2%";
    notificationButton.style.left = "5%";
  }

  static renderImages() {
    document.querySelector(".toggle-side-bar-button").src = sideBarIcon;
    document.querySelector(".profile-icon").src = profileIcon;
    document.querySelector(".profile-arrow").src = profileArrow;
    document.querySelector(".notification-button").src = notificationIcon;
  }
}

function create(tag) {
  return {
    element: document.createElement(tag),

    class(...classes) {
      this.element.classList.add(...classes);
      return this;
    },

    content(str) {
      this.element.innerText = str;
      return this;
    },

    child(...children) {
      this.element.append(...children);
      return this;
    },

    source(path) {
      this.element.src = path;
      return this;
    },

    build() {
      return this.element;
    },
  };
}

export { UI, create };
