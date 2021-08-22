'use strict';

let arrEven = ['a', 'b', 'c', 'd'];
let arrOdd = ['a', 'b', 'c', 'd', 'e'];
let value = 'z';

function arrayLength(funArr2) {
  let length = 0;
  while (funArr2[length] !== undefined) {
    length++;
  }
  return length;
}

function insertIntoArray(array, val) {
  let arrLen = arrayLength(array);

  let finalArr = array.slice();;

  for (let i = 0; i < arrLen+1; i++) {
    if (i >= (arrLen/2)) {
      console.log(`at ${i} i < ((arrLen/2)+1 = `,i < ((arrLen/2)+1), `${i} < ${((arrLen/2)+1)}`);
      if (i < ((arrLen/2)+1)) {
        finalArr[i] = value;
      } else {
        // console.log(`at ${i}, finalArr[i] // backUpArr[i-1] = ${finalArr[i]} // ${backUpArr[i-1]}`)
        finalArr[i] = array[i-1];
      }
      
    }
  }
  return finalArr;
}

console.log('even: ', insertIntoArray(arrEven, value));
console.log('odd: ', insertIntoArray(arrOdd, value));
