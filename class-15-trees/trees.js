"use strict";

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    /* root > left > right */
    let final = [];
    let preOrderTraverse = (leaf) => {
      final.push(leaf.value);
      if (leaf.left) preOrderTraverse(leaf.left);
      if (leaf.right) preOrderTraverse(leaf.right);
    };
    if (this.root) {
      preOrderTraverse(this.root);
    } else {
      return null;
    }
    return final;
  }

  inOrder() {
    /* left > root > right */
    let final = [];
    let inOrderTraverse = (leaf) => {
      if (leaf.left) inOrderTraverse(leaf.left);
      final.push(leaf.value);
      if (leaf.right) inOrderTraverse(leaf.right);
    };
    if (this.root) {
      inOrderTraverse(this.root);
    } else {
      return null;
    }

    return final;
  }

  postOrder() {
    /* left > right > root */
    let final = [];
    let postOrderTraverse = (leaf) => {
      if (leaf.left) postOrderTraverse(leaf.left);
      if (leaf.right) postOrderTraverse(leaf.right);
      final.push(leaf.value);
    };
    if (this.root) {
      postOrderTraverse(this.root);
    } else {
      return null;
    }

    return final;
  }
}

module.exports = Tree;
