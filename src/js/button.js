import { create } from "./node.js";

export default class {
  constructor(cls, content) {
    this.class = cls;
    this.content = content;
  }

  intoDiv() {
    return create("div")
      .class("side-bar-button")
      .child(
        create("img").class("button-icon", this.class).build(),
        create("p").class("button-text").content(this.content).build(),
      )
      .build();
  }
}
