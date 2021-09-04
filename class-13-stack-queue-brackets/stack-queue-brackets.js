"use strict";

const Stack = require("./stack");

class stackQueueBrackets {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  stackQueueBrackets(str) {
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
        this.stackOne.push(arr[i]);
      }
      if (arr[i] === ")" || arr[i] === "}" || arr[i] === "]") {
        this.stackTwo.push(arr[i]);
      }
    }
    if (this.stackOne.length === this.stackTwo.length) {
      this.stackOne.top = null;
      this.stackOne.length = 0;
      this.stackTwo.top = null;
      this.stackTwo.length = 0;

      return true;
    } else {
      this.stackOne.top = null;
      this.stackOne.length = 0;
      this.stackTwo.top = null;
      this.stackTwo.length = 0;

      return false;
    }
  }
}
module.exports = stackQueueBrackets;
