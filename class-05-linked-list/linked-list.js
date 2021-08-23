"use strcit";
const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // adds a new node and puts it at the head
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let current = this.head;
    this.head = node;
    node.next = current;

    return this;
  }
  // check if the value exists in the linked list, boolean
  includes(value) {
    let current = this.head;
    while (current.next) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  // Returns a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL"
  toString() {
    function stringFor(val) {
      return `{ ${val} } -> `
    }
    let string = "";
    let current = this.head;
    while (current.next) {
      string = string + stringFor(current.value)
      current = current.next;
    }
    string = string + "NULL"
    return string;
  }
  // adds a new node and puts it at the tail
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.tail = node;

    return this;
  }
  // adds a new node and puts it before the target value;
  insertBefore(value, target){
    const node = new Node(value);

    let current = this.head;
    while (current.next) {
      if (current.next.value === target) {
        node.next = current.next;
        current.next = node;
        break;
      }
      current = current.next;
    }

    return this;
  }
  insertAfter(value, target){
    const node = new Node(value);https://alqudscollege-my.sharepoint.com/:f:/g/personal/advtech_ltuc_com/EoyzJNQ_nkJHv5uliBZryjIBlCaTr83eaKOsymR4bckhOA?e=SkRH9C

    let current = this.head;
    while (current.next) {
      if (current.value === target) {
        node.next = current.next;
        current.next = node;
        break;
      }
      current = current.next;
    }

    return this;

  }
}

module.exports = LinkedList;
