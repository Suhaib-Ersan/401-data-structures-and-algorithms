"use strict";

const Stack = require("./stack.js");

class PseudoQueue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  enqueue(val) {
    this.stackOne.push(val);
  }
  dequeue() {
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop());
    }

    let finalPop = this.stackTwo.pop();
    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop());
    }
    return finalPop;
  }
}

module.exports = PseudoQueue;
