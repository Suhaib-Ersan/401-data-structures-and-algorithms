'use strict';

let arrEven = ['a', 'b', 'c', 'd'];
let arrOdd = ['a', 'b', 'c', 'd', 'e'];
let value = 'z';


function insertIntoArray(array, val) {
  let finalArr = array.slice();;

  for (let i = 0; i < array.length+1; i++) {
    if (i >= (array.length/2)) {
      // console.log(`at ${i} i < ((array.length/2)+1 = `,i < ((array.length/2)+1), `${i} < ${((array.length/2)+1)}`);
      if (i < ((array.length/2)+1)) {
        finalArr[i] = val;
      } else {
        // console.log(`at ${i}, finalArr[i] // backUpArr[i-1] = ${finalArr[i]} // ${backUpArr[i-1]}`)
        finalArr[i] = array[i-1];
      }
      
    }
  }
  return finalArr;
}

module.exports = {
  insertIntoArray,
}
// console.log('even: ', insertIntoArray(arrEven, value));
// console.log('odd: ', insertIntoArray(arrOdd, value));
