import { create } from "/src/js/utils/fluent.js";

export default class {
  constructor(cls, imgCls, content, source) {
    this.class = cls;
    this.imgClass = imgCls;
    this.content = content;
    this.src = source;
  }

  intoNode() {
    return create("div")
      .class(this.class)
      .child(
        create("img")
          .class("button-icon", this.imgClass)
          .source(this.src)
          .build(),
        create("p").class("button-text").content(this.content).build(),
      )
      .build();
  }
}
