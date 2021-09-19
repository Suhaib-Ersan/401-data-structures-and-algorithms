
const insertionSort = require("./insertion-sort.js");

describe("Insertion Sort", () => {
  it("should return the correct 10-element array", () => {
    let arr = [8,4,23,42,16,15,  5,9,155,2,50];
    expect(insertionSort(arr)).toEqual([2,4,5,8,9,15,16,23,42,50,155]);
  });
  it("should return the correct 5-element array", () => {
    let arr = [8,4,23,42,16,15];
    expect(insertionSort(arr)).toEqual([4,8,15,16,23,42]);
  });
  it("should return the correct 2-element array", () => {
    let arr = [8,4];
    expect(insertionSort(arr)).toEqual([4,8]);
  });
  it("should return the correct 1-element array", () => {
    let arr = [8];
    expect(insertionSort(arr)).toEqual([8]);
  });
  it("should return the correct 0-element array", () => {
    let arr = [];
    expect(insertionSort(arr)).toEqual([]);
  });
});
