"use strict";

const LinkedListKth = require("./linked-list-kth");

describe("Linked List Kth testing", () => {
  it("should be able to check the last value", async () => {
    let list = new LinkedListKth();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.linkedListKth(1)).toEqual(1);
  });
  it("should be able to check the first value", async () => {
    let list = new LinkedListKth();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.linkedListKth(3)).toEqual(3);
  });
  it("should return an exception when passing a -1", async () => {
    let list = new LinkedListKth();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.linkedListKth(-1)).toEqual("number can't be 0 or less");
  });
  it("should return an exception when passing higher than the length of the list", async () => {
    let list = new LinkedListKth();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.linkedListKth(4)).toEqual("number can't be higher than the length of the list");
  });
})