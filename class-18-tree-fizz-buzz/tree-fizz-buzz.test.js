"use strict";

const { fizzBuzzTree, kAryTreeManual } = require("./tree-fizz-buzz.js");
let Node = require("./node.js");

describe("Tree Breadth First", () => {
  it("should instantiate a new Tree", () => {
    let tree = new kAryTreeManual();
    expect(tree instanceof kAryTreeManual).toBeTruthy();
  });

  it("should return the correct 10-element fizzbuzz tree", () => {
    let firstNode = new Node(9);
    let secondNode = new Node(5);
    let thirdNode = new Node(15);
    let fourthNode = new Node(4);
    let fifthNode = new Node(25);
    let sixthNode = new Node(36);
    let seventhNode = new Node(22);
    let eighthNode = new Node(11);
    let ninthNode = new Node(10);
    let tenthNode = new Node(1);

    firstNode.children.push(secondNode, thirdNode, fourthNode);
    secondNode.children.push(fifthNode, sixthNode);
    fourthNode.children.push(eighthNode);
    sixthNode.children.push(seventhNode, ninthNode, tenthNode);

    let tree = new kAryTreeManual(firstNode);

    expect(fizzBuzzTree(tree).finArr).toEqual(["Fizz", "Buzz", "Buzz", "Fizz", "22", "Buzz", "1", "FizzBuzz", "4", "11"]);
  });
  it("should return the correct 3-element fizzbuzz tree", () => {
    let firstNode = new Node(9);
    let secondNode = new Node(5);
    let thirdNode = new Node(1);

    firstNode.children.push(secondNode, thirdNode);

    let tree = new kAryTreeManual(firstNode);

    expect(fizzBuzzTree(tree).finArr).toEqual(["Fizz", "Buzz", "1"]);
  });
  it("should return the correct 1-element fizzbuzz tree", () => {
    let firstNode = new Node(9);

    let tree = new kAryTreeManual(firstNode);

    expect(fizzBuzzTree(tree).finArr).toEqual(["Fizz"]);
  });
  it("should return the correct 0-element fizzbuzz tree", () => {
    let tree = new kAryTreeManual();
    expect(fizzBuzzTree(tree)).toBeNull();
  });
});
