'use strict';

let ll = require("../class-05-06-linked-list/linked-list.js");

function linkedListZip(list1, list2) {
  let newLl = new ll();
  let current1 = list1.head;
  let current2 = list2.head;
  while (current1 || current2) {
    if (current1) {
      newLl.insert(current1.value);
      current1 = current1.next;
    }
    if (current2) {
      newLl.insert(current2.value);
      current2 = current2.next;
    } 
  }
  return newLl;
}

module.exports = linkedListZip;