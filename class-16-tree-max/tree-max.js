"use strict";

const Bst = require("../class-15-trees/binary-search-tree.js");

class treeMax extends Bst {
  constructor() {
    super();
  }

  maxNum() {
    if (!this.root) {
      return null;
    } else {
      let finNum = -1;
      let preOrderTraverse = (leaf) => {
        if (finNum < leaf.value) {
          finNum = leaf.value;
        }
        if (leaf.left) preOrderTraverse(leaf.left);
        if (leaf.right) preOrderTraverse(leaf.right);
      };
      preOrderTraverse(this.root);
      return finNum;
    }
  }
}

module.exports = treeMax;
