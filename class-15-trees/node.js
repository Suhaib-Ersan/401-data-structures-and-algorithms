"use strict";

class Node {
  constructor(value, leftNode = null, rightNode = null) {
    this.value = value;
    this.left = leftNode;
    this.right = rightNode;
  }
}

module.exports = Node;
