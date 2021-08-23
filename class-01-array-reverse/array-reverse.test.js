"use strict";

const { reverseArray } = require("./array-reverse.js");


describe("express server", () => {
  it("should return a reversed array of 10 elements", async () => {
    // arrange
    let arr = [1,2,7,8,80,10,20,2,500,20];
    // act
    let revArr = reverseArray(arr);
    // assert
    expect(revArr).toEqual(arr.reverse());
  });
  it("should return a reversed array of 2 elements", async () => {
    // arrange
    let arr = [1,2];
    // act
    let revArr = reverseArray(arr);
    // assert
    expect(revArr).toEqual(arr.reverse());
  });
  it("should return an empty array", async () => {
    // arrange
    let arr = [];
    // act
    let revArr = reverseArray(arr);
    // assert
    expect(revArr).toEqual(arr.reverse());
  });
});
