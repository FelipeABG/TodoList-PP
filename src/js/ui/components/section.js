import { create } from "/src/js/utils/node.js";

export default class {
  constructor(tittle) {
    this.tittle = tittle;
  }

  intoNode() {
    return create("div")
      .class("section", this.tittle.toLowerCase().replace(" ", "-"))
      .child(
        create("div").class("section-tittle").content(this.tittle).build(),
        create("div").class("section-todo-contianer").build(),
      )
      .build();
  }
}
