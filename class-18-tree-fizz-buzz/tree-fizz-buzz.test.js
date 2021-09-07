"use strict";

const { fizzBuzzTree, Tree } = require("./tree-fizz-buzz.js");

describe("Tree Breadth First", () => {
  it("should instantiate a new Tree", () => {
    let tree = new Tree();
    expect(tree instanceof Tree).toBeTruthy();
  });

  it("should return the correct 10-element fizzbuzz tree", () => {
    let tree = new Tree();

    tree.add(9);
    tree.add(5);
    tree.add(15);
    tree.add(4);
    tree.add(25);
    tree.add(36);
    tree.add(22);
    tree.add(11);
    tree.add(10);
    tree.add(1);

    expect(fizzBuzzTree(tree).preOrder()).toEqual(["Fizz", "Buzz", "4", "1", "FizzBuzz", "11", "Buzz", "Buzz", "22", "Fizz"]);
  });
  it("should return the correct 3-element fizzbuzz tree", () => {
    let tree = new Tree();

    tree.add(9);
    tree.add(2);
    tree.add(15);

    expect(fizzBuzzTree(tree).preOrder()).toEqual(["Fizz", "2", "FizzBuzz"]);
  });
  it("should return the correct 1-element fizzbuzz tree", () => {
    let tree = new Tree();

    tree.add(9);

    expect(fizzBuzzTree(tree).preOrder()).toEqual(["Fizz"]);
  });
  it("should return the correct 0-element fizzbuzz tree", () => {
    let tree = new Tree();

    expect(fizzBuzzTree(tree).preOrder()).toEqual(null);
  });
});
