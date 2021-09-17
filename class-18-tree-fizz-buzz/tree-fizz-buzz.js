"use strict";

const kAryTreeManual = require("./kary-tree.js");

function fizzBuzzTree(tree) {
  if (!tree.root) return null;
  let finTree = tree;
  let finArr = [];

  function fizzBuzz(leaf) {
    if (leaf.value % 3 === 0 && leaf.value % 5 === 0) {
      leaf.value = "FizzBuzz";
      finArr.push(leaf.value);
    } else if (leaf.value % 3 === 0) {
      leaf.value = "Fizz";
      finArr.push(leaf.value);
    } else if (leaf.value % 5 === 0) {
      leaf.value = "Buzz";
      finArr.push(leaf.value);
    } else {
      leaf.value = `${leaf.value}`;
      finArr.push(leaf.value);
    }

    for (let i = 0; i < leaf.children.length; i++) {
      fizzBuzz(leaf.children[i]);
    }
  }
  if (finTree.root) {
    fizzBuzz(finTree.root);
  } 
  return { finTree, finArr };
}

module.exports = { fizzBuzzTree, kAryTreeManual };
