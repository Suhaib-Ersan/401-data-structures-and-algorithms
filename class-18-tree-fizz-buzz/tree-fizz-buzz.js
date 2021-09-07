"use strict";

const Tree = require("../class-16-tree-max/tree-max.js");

function fizzBuzzTree(tree) {
  let finTree = tree;


  function fizzBuzz(leaf) {
    if ((leaf.value % 3 === 0) && (leaf.value % 5 === 0)) {
      leaf.value = 'FizzBuzz';
    } else if (leaf.value % 3 === 0) {
      leaf.value = 'Fizz';
    } else if (leaf.value % 5 === 0) {
      leaf.value = 'Buzz';
    } else {
      leaf.value = `${leaf.value}`;
    }
    
    if (leaf.left) fizzBuzz(leaf.left);
    if (leaf.right) fizzBuzz(leaf.right);
  };
  if (finTree.root) {
    fizzBuzz(finTree.root);
  }
  return finTree;
}

module.exports = {fizzBuzzTree, Tree};
