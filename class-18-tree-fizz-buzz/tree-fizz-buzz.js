"use strict";

const kAryTreeManual = require("./kary-tree.js");

function fizzBuzzTree(tree) {
  if (!tree.root) return null;
  let finTree = tree;
  let finArr = [];

  function fizzBuzz(leaf) {
    if (leaf.value % 3 === 0 && leaf.value % 5 === 0) {
      leaf.value = "FizzBuzz";
    } else if (leaf.value % 3 === 0) {
      leaf.value = "Fizz";
    } else if (leaf.value % 5 === 0) {
      leaf.value = "Buzz";
    } else {
      leaf.value = `${leaf.value}`;
    }

    for (let i = 0; i < leaf.children.length; i++) {
      fizzBuzz(leaf.children[i]);
    }
  }
  function order(leaf) {
    finArr.push(leaf.value);
    for (let i = 0; i < leaf.children.length; i++) {
      order(leaf.children[i]);
    }
  }

  if (finTree.root) {
    fizzBuzz(finTree.root);
    order(finTree.root);
  } 
  return { finTree, finArr };
}

module.exports = { fizzBuzzTree, kAryTreeManual };
