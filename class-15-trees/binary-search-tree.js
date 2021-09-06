"use strict";

const Tree = require("./trees.js");
const Node = require("./node.js");

class binarySearchTree extends Tree {
  constructor() {
    super();
  }

  add(val) {
    if (!isNaN(val)) {
      let node = new Node(val);

      if (!this.root) {
        this.root = node;
        return "added node successfully";
      } else {
        let addNode = (current, node) => {
          if (node.value < current.value) {
            if (current.left) {
              return addNode(current.left, node);
            } else {
              current.left = node;
              return "added node successfully";
            }
          } else if (node.value > current.value) {
            if (current.right) {
              return addNode(current.right, node);
            } else {
              current.right = node;
              return "added node successfully";
            }
          } else if (node.value === current.value) {
            return "can't store duplicate nodes";
          } else {
            return null;
          }
        };
        return addNode(this.root, node);
      }
    } else {
      return "this tree accepts numbers only";
    }
  }

  contains(val) {
    return this.preOrder().includes(val);
  }
}

module.exports = binarySearchTree;
