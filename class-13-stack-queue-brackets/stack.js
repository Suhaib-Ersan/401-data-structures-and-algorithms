"use strict";

const Node = require("./node.js");

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  peek() {
    if (this.top) {
      return this.top.value;
    }
    return null;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    let item = this.top;
    this.top = item.next;
    this.length--;
    return item.value;
  }

  push(val) {
    let item = new Node(val);
    item.next = this.top;
    this.length++;
    this.top = item;
  }
}

module.exports = Stack;
