"use strict";

let arr = [1, 2, 3, 4, 5];

function reverseArray(funArr) {
  if (funArr.length === 0) {
    return [];
  }
  let newArr = [0];
  let z = 0;
  for (let i = funArr.length - 1; i >= 0; i--) {
    // console.log(`newArr[z] is ${newArr[z]} AND arr[i] is ${funArr[i]}`);
    newArr[z] = funArr[i];
    // console.log(`AFTER, newArr[z] is ${newArr[z]} AND arr[i] is ${funArr[i]}`);
    z++;
  }
  return newArr;
}
let finalArr = reverseArray(arr);

module.exports = { reverseArray };
// console.log(finalArr);

// function reverseArrayInPlace(arr2) {
//   var half = Math.floor(arr2.length / 2);
//   for (var i = 0; i < half; i++) {
//     var temp = arr2[arr2.length - 1 - i];
//     arr2[arr2.length - 1 - i] = arr2[i];
//     arr2[i] = temp;
//   }
//   return arr2;
// }
// console.log(reverseArrayInPlace(arr));

// console.log(for (let h = 0; h < arr.length; h++) {let hey = 'hey'});

// function forLoop() {
//   for (let h = 0; h < arr.length; h++) {let hey = 'hey'}
// }
// console.log(forLoop);

// let something = for (let hz = 0; hz < arr.length; hz++) {
//   return hey = 'hey';
// }
