"use strict";

const LinkedList = require("./linked-list.js");
const Node = require("./node.js");


describe("express server", () => {
  it("should return a node", async () => {
    // arrange
    let val = 1;
    // act
    let final = new Node(val);
    // assert
    expect(final).toEqual({"next": null, "value": 1});
  });
  it("should return an empty linked list", async () => {
    // arrange
    let list = {
      head:  null,
      tail: null,
    }
    // act
    let linkedListTest = new LinkedList()
    // assert
    expect(linkedListTest).toEqual(list);
  });
  it("should return a linked list with one node", async () => {
    // arrange
    let val = 1;
    let list = {
      head: { value: 1, next: null },
      tail: { value: 1, next: null }
    }
    // act
    let linkedListTest = new LinkedList();
    linkedListTest.insert(val);
    // assert
    expect(linkedListTest).toEqual(list);
  });
  it("should return true", async () => {
    // arrange
    let val = 1;
    // act
    let linkedListTest = new LinkedList();
    linkedListTest.insert(val);

    let final = linkedListTest.includes(val);
    // assert
    expect(final).toEqual(true);
  });
  it("should return an linked list with the specified value as the last node", async () => {
    // arrange
    let val = 1;
    let val2 = 2;
    let val3 = 3;

    let list = {
      head: { value: 3, next: { value: 2, next: { value: 1, next: { value: 1, next: null } } } },
      tail: { value: 1, next: null }
    }
    // act
    let linkedListTest = new LinkedList();
    linkedListTest.insert(val);
    linkedListTest.insert(val2);
    linkedListTest.insert(val3);
    
    linkedListTest.append(val);
    // assert
    expect(linkedListTest).toEqual(list);
  });
});
