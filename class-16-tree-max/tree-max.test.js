"use strict";

const Tree = require("./tree-max.js");

describe("Tree Max", () => {
  it("should instantiate a new Tree", () => {
    let tree = new Tree();
    expect(tree instanceof Tree).toBeTruthy();
  });

  it("should find 25 to be the biggest numb, out of a 10-leaf tree", () => {
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

    expect(tree.maxNum()).toBe(25);
    
  });

  it("should find 3 to be the biggest numb, out of a 2-leaf tree", () => {
    let tree = new Tree();

    tree.add(1);
    tree.add(2);

    expect(tree.maxNum()).toBe(2);
    
  });

  it("should find 25 to be the biggest numb, out of a 10-leaf tree", () => {
    let tree = new Tree();

    expect(tree.maxNum()).toBe(null);
    
  });
});
