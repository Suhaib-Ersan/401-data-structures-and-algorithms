"use strict";

const Tree = require("./tree-breadth-first.js");

describe("Tree Breadth First", () => {
  it("should instantiate a new Tree", () => {
    let tree = new Tree();
    expect(tree instanceof Tree).toBeTruthy();
  });

  it("should return the correct 10-element array when calling the Tree Breadth First function", () => {
    let tree = new Tree();

    tree.add(9);
    tree.add(7);
    tree.add(21);
    tree.add(25);
    tree.add(1);
    tree.add(17);
    tree.add(3);
    tree.add(8);
    tree.add(2);
    tree.add(6);

    expect(tree.breadthFirst()).toEqual([9, 7, 21, 1, 8, 17, 25, 3, 2, 6]);
  });

  it("should return the correct 3-element array when calling the Tree Breadth First function", () => {
    let tree = new Tree();

    tree.add(7);
    tree.add(2);
    tree.add(6);

    expect(tree.breadthFirst()).toEqual([7,2,6]);
  });
  it("should return the correct 1-element array when calling the Tree Breadth First function", () => {
    let tree = new Tree();

    tree.add(7);

    expect(tree.breadthFirst()).toEqual([7]);
  });
  it("should return null when calling the Tree Breadth First function", () => {
    let tree = new Tree();;

    expect(tree.breadthFirst()).toEqual(null);
  });
});
