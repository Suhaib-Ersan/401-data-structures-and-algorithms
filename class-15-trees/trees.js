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
    preOrderTraverse(this.root);
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
    inOrderTraverse(this.root);
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
    postOrderTraverse(this.root);
    return final;
  }
}

module.exports = Tree;
