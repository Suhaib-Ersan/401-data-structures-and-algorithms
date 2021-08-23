"use strict";

const { insertIntoArray } = require("./array-insert-shift.js");


describe("express server", () => {
  it("should return an array that reads [1,2,4,3]", async () => {
    // arrange
    let arr = [1,2,3];
    let val = 4;
    // act
    let final = insertIntoArray(arr, val);
    // assert
    expect(final).toEqual([1,2,4,3]);
  });
  it("should return an array that reads [1,2,5,3,4]", async () => {
    // arrange
    let arr = [1,2,3,4];
    let val = 5;
    // act
    let final = insertIntoArray(arr, val);
    // assert
    expect(final).toEqual([1,2,5,3,4]);
  });
});
