"use strict";

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        console.log(`${arr} || ${left} || ${right}`);
        // Partition the array by setting the position of the pivot value
        let position = partition(arr, left, right);
        // Sort the left
        console.log(`${arr} || ${position} || ${left} || ${right}`);
        quickSort(arr, left, position - 1);
        // Sort the right
        console.log(`${arr} || ${position} || ${left} || ${right}`);
        quickSort(arr, position + 1, right);

        console.log(`${arr} || ${position} || ${left} || ${right}`);
    }
}
function partition(arr, left, right) {
    console.log(`${arr}`);
    // set a pivot value as a point of reference
    let pivot = arr[right];
    console.log(`${pivot} `);
    // create a variable to track the largest index of numbers lower than the defined pivot
    let low = left - 1;
    console.log(`${low} || ${right}`);
    for (let i = left; i < right; i++) {
        if (arr[i] <= pivot) {
            console.log(`${arr[i]} || ${pivot}`);
            low++;
            console.log(`${i} || ${low}`);
            console.log(`${arr[i]} || ${arr[low]}`);
            swap(arr, i, low);
        }
    }
    // place the value of the pivot location in the middle.
    // all numbers smaller than the pivot are on the left, larger on the right.
    swap(arr, right, low + 1);
    // return the pivot index point
    console.log(`${arr} || ${left} || ${right} `);
    return low + 1;
}
function swap(arr, i, low) {
    console.log(`${arr} || ${i} || ${low} `);
    let temp;
    temp = arr[i];
    arr[i] = arr[low];
    arr[low] = temp;
    console.log(`${arr} || ${i} || ${low} `);
}

let arr = [8, 4, 23, 42, 16, 15];
quickSort(arr);
console.log(arr);

module.exports = quickSort;
