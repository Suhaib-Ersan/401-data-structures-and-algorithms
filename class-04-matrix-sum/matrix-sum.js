"use strict";

function matrixSum(arr) {
  let newArr = [];
  let wasChanged = false;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr[newArr.length] = matrixSum(arr[i]);
    } else if (typeof arr[i] === "number") {
      console.log(`${typeof arr[i]} ${arr[i]}`);
      result = result + arr[i];
      wasChanged = true;
    }
  }
  console.log(result);
  if ((wasChanged)) {
    newArr[newArr.length] = result;
  }

  return newArr;
}

console.log(
  matrixSum([
    [1, 2, 3],
    [3, 5, 7],
    [1, 7, 10],
  ])
);
// expected: [6, 15, 18]

// console.log(
//   matrixSum([
//     [0, 1, 5],
//     [-4, 7, 2],
//     [-3, 12, 11],
//   ])
// );
// expected: [6, 5, 20]
