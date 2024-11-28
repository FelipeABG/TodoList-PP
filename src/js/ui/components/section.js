import { create } from "/src/js/utils/fluent.js";

export default class {
  constructor(tittle) {
    this.tittle = tittle;
  }

  intoNode() {
    return create("div")
      .class("section", this.tittle.toLowerCase().replace(" ", "-"))
      .child(
        create("div").class("section-tittle").content(this.tittle).build(),
        create("div").class("section-todo-container").build(),
      )
      .build();
  }
}
