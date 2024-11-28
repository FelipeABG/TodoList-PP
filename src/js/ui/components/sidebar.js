import sideBarIcon from "/src/img/sidebar.svg";
import profileIcon from "/src/img/profile.svg";
import profileArrow from "/src/img/downarrow.svg";
import notificationIcon from "/src/img/notification.svg";
import plusIcon from "/src/img/plus.svg";
import searchIcon from "/src/img/search.svg";
import inboxIcon from "/src/img/inbox.svg";
import calendarIcon from "/src/img/calendar.svg";
import filterIcon from "/src/img/filter.svg";
import { create } from "/src/js/utils/fluent.js";
import Button from "../components/button";
import Project from "/src/js/entities/project.js";
import Task from "/src/js/entities/task.js";

export default class {
  static render() {
    this.#renderSideBarProfile();
    this.#renderSideBarButtons();
    this.#renderSideBarProjects();
  }

  static #renderSideBarProjects() {
    const projectContainer = document.querySelector(".project-container");

    projectContainer.append(
      new Project("Default Project", [
        new Task("Fix the car", "a", "a", "a"),
        new Task("Clear the kitchen", "a", "a", "a"),
        new Task("Go to the Park", "a", "a", "a"),
      ]).intoNode(),
    );
  }
  static toggleSideBar() {
    const sidebar = document.querySelector(".side-bar-container");
    const main = document.querySelector(".main-container");
    const sideBarButton = document.querySelector(".toggle-side-bar-button");
    const notificationButton = document.querySelector(".notification-button");

    //Open side bar
    if (sidebar.style.width == "0%") {
      sidebar.style.width = "20%";
      main.style.width = "80%";
      sideBarButton.style.left = "18%";
      notificationButton.style.left = "16%";
      return;
    }

    //Close side bar
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
      new Button("add-icon", "Add Task", plusIcon),
      new Button("inbox-icon", "Inbox", inboxIcon),
      new Button("today-icon", "Today", calendarIcon),
      new Button("filter-icon", "Filter & Labels", filterIcon),
      new Button("search-icon", "Search", searchIcon),
    ];

    buttons.forEach((button) => {
      buttonContainer.appendChild(button.intoNode());
    });

    //The add task button has different styles
    const addTaskButton = document.querySelector(".side-bar-button");
    addTaskButton.classList.add("add-task-button");
    addTaskButton.lastChild.classList.add("add-text");

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
}
