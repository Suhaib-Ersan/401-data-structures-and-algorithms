"use strict";

const ll = require("../class-05-06-linked-list/linked-list.js");
let linkedListZip = require("./linked-list-zip.js");

describe("linked lists zipping", () => {
  it("should return a merged list", async () => {
    let list1 = new ll();
    list1.insert(1);
    list1.insert(2);
    list1.insert(3);
    
    let list2 = new ll();
    list2.insert("A");
    list2.insert("B");
    list2.insert("C");

    let zippedList = linkedListZip(list1, list2);

    expect(zippedList.toString()).toEqual("{ A } -> { 1 } -> { B } -> { 2 } -> { C } -> { 3 } -> NULL")
  });
  it("should return a merged list, with one shorter than the other", async () => {
    let list1 = new ll();
    list1.insert(1);
    list1.insert(2);
    list1.insert(3);
    
    let list2 = new ll();
    list2.insert("A");

    let zippedList = linkedListZip(list1, list2);

    expect(zippedList.toString()).toEqual("{ 1 } -> { 2 } -> { A } -> { 3 } -> NULL")
  });
})