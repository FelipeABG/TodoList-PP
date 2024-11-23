import sideBarIcon from "../img/siderbar.svg";
import profileIcon from "../img/profile.svg";
import profileArrow from "../img/downarrow.svg";
import notificationIcon from "../img/notification.svg";
import addIcon from "../img/plus.svg";
import searchIcon from "../img/search.svg";
import inboxIcon from "../img/inbox.svg";
import calendarIcon from "../img/calendar.svg";
import filterIcon from "../img/filter.svg";
import Button from "./button.js";
import { create } from "./node.js";
import Project from "./project.js";
import Task from "./task.js";

export default class {
  static render() {
    this.#renderSideBarButtons();
    this.#renderSideBarProfile();
    this.#renderProjects();
  }

  static toggleSideBar() {
    const sidebar = document.querySelector(".side-bar-container");
    const main = document.querySelector(".main-container");
    const sideBarButton = document.querySelector(".toggle-side-bar-button");
    const notificationButton = document.querySelector(".notification-button");

    if (sidebar.style.width == "0%") {
      sidebar.style.width = "20%";
      main.style.width = "80%";
      sideBarButton.style.left = "18%";
      notificationButton.style.left = "16%";
      return;
    }

    sidebar.style.width = "0%";
    main.style.width = "100%";
    sideBarButton.style.left = "2%";
    notificationButton.style.left = "4%";
  }

  static #renderSideBarProfile() {
    const container = document.querySelector(".profile-container");

    const profileImg = create("img")
      .class("profile-icon")
      .source(profileIcon)
      .build();

    const text = create("p").content("Felipe").build();

    const arrowImg = create("img")
      .class("profile-arrow")
      .source(profileArrow)
      .build();

    container.append(profileImg, text, arrowImg);
  }

  static #renderSideBarButtons() {
    const buttonContainer = document.querySelector(".buttons-container");
    const body = document.querySelector("body");

    const buttons = [
      new Button("add-icon", "Add Task", addIcon),
      new Button("inbox-icon", "Inbox", inboxIcon),
      new Button("today-icon", "Today", calendarIcon),
      new Button("filter-icon", "Filter & Labels", filterIcon),
      new Button("search-icon", "Search", searchIcon),
    ];

    buttons.forEach((button) => {
      buttonContainer.appendChild(button.intoDiv());
    });

    //The add task button has different styles
    document
      .querySelector(".side-bar-button")
      .lastChild.classList.add("add-text");

    //Adding access to the side bar
    const sideBarButton = create("img")
      .class("toggle-side-bar-button")
      .source(sideBarIcon)
      .build();
    const notificationButton = create("img")
      .class("notification-button")
      .source(notificationIcon)
      .build();

    body.append(sideBarButton, notificationButton);
  }

  static #renderProjects() {
    const projectContainer = document.querySelector(".project-container");

    projectContainer.append(
      new Project("Default Project", [
        new Task("Fix the car", "a", "a", "a"),
        new Task("Clear the kitchen", "a", "a", "a"),
      ]).intoNode(),
    );
  }
}
