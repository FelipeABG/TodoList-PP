import sideBarIcon from "../img/siderbar.svg";
import profileIcon from "../img/profile.svg";
import profileArrow from "../img/downarrow.svg";
import notificationIcon from "../img/notification.svg";
import addIcon from "../img/plus.svg";
import searchIcon from "../img/search.svg";
import inboxIcon from "../img/inbox.svg";
import calendarIcon from "../img/calendar.svg";
import filterIcon from "../img/filter.svg";

class UI {
  static toggleSideBar() {
    const sidebar = document.querySelector(".side-bar-container");
    const main = document.querySelector(".main-container");
    const sideBarbutton = document.querySelector(".toggle-side-bar-button");
    const notificationButton = document.querySelector(".notification-button");

    if (sidebar.style.width == "0%") {
      sidebar.style.width = "20%";
      main.style.width = "80%";
      sideBarbutton.style.left = "18%";
      notificationButton.style.left = "16%";
      return;
    }

    sidebar.style.width = "0%";
    main.style.width = "100%";
    sideBarbutton.style.left = "2%";
    notificationButton.style.left = "4%";
  }

  static renderImages() {
    document.querySelector(".toggle-side-bar-button").src = sideBarIcon;
    document.querySelector(".profile-icon").src = profileIcon;
    document.querySelector(".profile-arrow").src = profileArrow;
    document.querySelector(".notification-button").src = notificationIcon;
    document.querySelector(".add-icon").src = addIcon;
    document.querySelector(".search-icon").src = searchIcon;
    document.querySelector(".inbox-icon").src = inboxIcon;
    document.querySelector(".today-icon").src = calendarIcon;
    document.querySelector(".filter-icon").src = filterIcon;
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
