"use strict";

const Tree = require("./binary-search-tree.js");

describe("Binary Search Tree", () => {
  it("should instantiate a new Tree", () => {
    let tree = new Tree();
    expect(tree instanceof Tree).toBeTruthy();
  });

  it("should add multiple values to the tree, with an exception with a duplicate", () => {
    let tree = new Tree();

    expect(tree.add(5)).toBe("added node successfully");
    expect(tree.add(8)).toBe("added node successfully");
    expect(tree.add(2)).toBe("added node successfully");

    expect(tree.add(8)).toBe("can't store duplicate nodes");
    expect(tree.add(2)).toBe("can't store duplicate nodes");
  });

  it("should check if the tree contains a value correctly", () => {
    let tree = new Tree();

    tree.add(5);
    tree.add(8);
    tree.add(2);

    expect(tree.contains(2)).toBe(true);
    expect(tree.contains(1)).toBe(false);
  });

  it("should check if preOrder function works correctly", () => {
    let tree = new Tree();

    tree.add(9);
    tree.add(8);
    tree.add(2);
    tree.add(10);
    tree.add(12);
    tree.add(3);
    tree.add(1);
    tree.add(7);
    tree.add(21);

    expect(tree.preOrder()).toEqual([9, 8, 2, 1, 3, 7, 10, 12, 21]);
  });

  it("should check if inOrder function works correctly", () => {
    let tree = new Tree();

    tree.add(9);
    tree.add(8);
    tree.add(2);
    tree.add(10);
    tree.add(12);
    tree.add(3);
    tree.add(1);
    tree.add(7);
    tree.add(21);

    expect(tree.inOrder()).toEqual([1, 2, 3, 7, 8, 9, 10, 12, 21]);
  });

  it("should check if postOrder function works correctly", () => {
    let tree = new Tree();

    tree.add(9);
    tree.add(8);
    tree.add(2);
    tree.add(10);
    tree.add(12);
    tree.add(3);
    tree.add(1);
    tree.add(7);
    tree.add(21);

                                     
    expect(tree.postOrder()).toEqual([1, 7, 3, 2, 8, 21, 12, 10, 9]);
  });
});
