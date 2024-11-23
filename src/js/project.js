import { create } from "./node.js";
import circleIcon from "../img/circle.svg";

export default class {
  constructor(name, tasks) {
    this.name = name;
    this.tasks = tasks;
  }

  intoNode() {
    const projectTitle = create("div")
      .class("title-container")
      .child(
        create("img").class("title-img").source(circleIcon).build(),
        create("p").content(this.name).build(),
      )
      .build();

    if (this.tasks.length == 0) {
      return create("div").class("project").child(projectTitle).build();
    }

    return create("div")
      .class("project")
      .child(
        projectTitle,
        create("div")
          .class("task-container")
          .child(...this.#tasksToNode())
          .build(),
      )
      .build();
  }

  #tasksToNode() {
    const divs = [];

    this.tasks.forEach((task) => {
      divs.push(task.intoMiniNode());
    });

    return divs;
  }
}
