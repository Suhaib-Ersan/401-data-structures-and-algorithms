"use strict";

const Node = require("./node.js");

class Stack {
  constructor() {
    this.top = null;
  }
  peek() {
    return this.top.value;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    let item = this.top;
    this.top = item.next;
    return item.value;
  }

  push(val) {
    let item = new Node(val);
    item.next = this.top;
    this.top = item;
  }
  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
  }
  enqueue(val) {
    let item = new Node(val);
    if (!this.first) {
      this.first = item;
    } else {
      let current = this.first;
      while (current.next) {
        current = current.next
      }
      current.next = item;
    }
  }
  dequeue() {
    if (!this.first) {
      return null;
    } else {
      let item = this.first;
      this.first = this.first.next;
      return item.value;
    }
  }
  peek() {
    if (!this.first) {
      return null;
    } else {
      return this.first.value;
    }
  }
  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { Stack, Queue };
