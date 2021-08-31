'use strict';

let linkedList = require("../class-05-06-linked-list/linked-list.js");


class linkedListKth extends linkedList {
  constructor() {
    super()
  }
  linkedListKth(num) {
    if (num <= 0) {
      return "number can't be 0 or less";
    }
    let item = this.head;
    let count = 1;
    while (item.next) {
      item = item.next;
      count++;
    }
    item = this.head;
    let finalCount = count - num;
    if (finalCount <= -1) {
      return "number can't be higher than the length of the list";
    }
    for (let i = 0; i < finalCount; i++) {
      console.log(item);
      item = item.next;      
    }
    console.log(item);
    return item.value;
  }
}

module.exports = linkedListKth;