"use strict";

// TODO:
// *  Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.


function BinarySearch(arr, val) {
  let backUpArr = arr.splice("");

  let minIdxTest = 0;
  let maxIdxTest = backUpArr.length - 1;

  function fixFloat(num) {
    let newNum;
    // console.log(num);
    if (num % 1 !== 0) {
      newNum = num + 0.5;
    } else {
      newNum = num;
    }
    // console.log(newNum);
    return newNum;
  }
  // let arrayIndexLog = [];
  // let x = 0;
  // backUpArr.forEach(element => {
  //   arrayIndexLog.push(x);
  //   x++;
  // });

  let indexToBeReturned = -1; // the value that will be returned
  let keepLooping = 0;
  
  // console.log(backUpArr, val);
  // console.log(arrayIndexLog); 
  while (keepLooping < 10) {
        
    let target = fixFloat((minIdxTest + maxIdxTest) / 2);
    // console.log(`${minIdxTest} ${maxIdxTest}`);
    // console.log(target);                       
    // console.log(`${backUpArr[target]} > ${val}`,backUpArr[target] > val);
    if (minIdxTest === maxIdxTest) {

      // console.log("ran");
      if (backUpArr[minIdxTest] === val) {
        indexToBeReturned = minIdxTest;
      }
      keepLooping++
      break;
    } else if (backUpArr[target] === val) {

      // console.log("ran");

      indexToBeReturned = target;
      keepLooping++
      break;
    } else if (backUpArr[target] > val) {

      // console.log("ran");

      maxIdxTest = target - 1;
      keepLooping++
      continue;
    } else {

      // console.log("ran");
      
      // console.log(target);
      minIdxTest = target + 1;
      keepLooping++
      continue;
    }
  }

  return indexToBeReturned;
}

module.exports = {
  BinarySearch,
}
// console.log(BinarySearch([4, 8, 15, 16, 23, 42, 75],4));
// console.log(BinarySearch([4, 8, 15, 16, 23, 42, 75, 80, 85, 90, 105, 150, 200, 250, 347, 800, 1500], 800));

// let arraaa = [4, 8, 15, 16, 23, 42];
// console.log(arraaa.length);

// arraaa.length = parseInt(arraaa.length / 2);

// console.log(arraaa);

// function BinarySearch(arr, val) {
//   let backUpArr = arr.splice();
//   let backUpArrHalf = backUpArr.length / 2;

//   if (backUpArrHalf % 1 !== 0) {
//     backUpArrHalf = backUpArrHalf + 0.5;
//   }

//   let indexOfNum = -1; // the value that will be returned
//   while ((indexOfNum = -1)) {
//     console.log(`backUpArr = ${backUpArr} // backUpArrHalf = ${backUpArrHalf}`);
//     if ((backUpArrHalf.length = 1)) {
//       indexOfNum = -1;
//     } else if (backUpArr[backUpArrHalf] === val) {
//       indexOfNum = backUpArrHalf;
//     } else if (backUpArr[backUpArrHalf] > val) {
//       backUpArr.length = backUpArr.length - parseInt(backUpArr.length / 2);
//       backUpArrHalf = backUpArr.length / 2;
//       if (backUpArrHalf % 1 !== 0) {
//         backUpArrHalf = backUpArrHalf + 0.5;
//       }
//     } else {
//       // let toCutLength = backUpArr.length - parseInt(backUpArr.length / 2);
//       let newArr = [];
//       let z = 0;
//       for (let i = backUpArrHalf + 1; i < backUpArr.length; i++) {
//         newArr[z] = backUpArr[i];
//         z++;
//       }
//       backUpArr = newArr.splice();
//       backUpArrHalf = backUpArr.length / 2;
//       if (backUpArrHalf % 1 !== 0) {
//         backUpArrHalf = backUpArrHalf + 0.5;
//       }
//     }
//   }
//   return indexOfNum;
// }
