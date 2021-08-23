"use strict";

const { BinarySearch } = require("./array-binary-search.js");


describe("express server", () => {
  it("should return a 0", async () => {
    // arrange
    let arr = [4, 8, 15, 16, 23, 42, 75];
    let val = 4;
    // act
    let final = BinarySearch(arr,val);
    // assert
    expect(final).toEqual(0);
  });
  it("should return a 3", async () => {
    // arrange
    let arr = [4, 8, 15, 16, 23, 42, 75];
    let val = 16;
    // act
    let final = BinarySearch(arr,val);
    // assert
    expect(final).toEqual(3);
  });
  it("should return a 5", async () => {
    // arrange
    let arr = [4, 8, 15, 16, 23, 42, 75];
    let val = 42;
    // act
    let final = BinarySearch(arr,val);
    // assert
    expect(final).toEqual(5);
  });
});
