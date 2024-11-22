import { create } from "./node.js";

export default class {
  constructor(cls, content, source) {
    this.class = cls;
    this.content = content;
    this.src = source;
  }

  intoDiv() {
    return create("div")
      .class("side-bar-button")
      .child(
        create("img").class("button-icon", this.class).source(this.src).build(),
        create("p").class("button-text").content(this.content).build(),
      )
      .build();
  }
}
