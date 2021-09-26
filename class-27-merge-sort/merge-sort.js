function mergeSort(arr) {
    let n = arr.length;
    if (n > 1) {
        let mid = n / 2;
        let left = arr.slice(0, mid);
        let right = arr.slice(mid, n);
        // sort the left side
        mergeSort(left);
        // sort the right side
        mergeSort(right);
        // merge the sorted left and right sides together
        console.log(`${left} || ${right} `);
        console.log(arr);
        merge(left, right, arr);
        console.log(`${left} || ${right} `);
        console.log(arr);
    }
    function merge(left, right, arr) {
        let leftCnt = 0;
        let rightCnt = 0;
        let arrCnt = 0;

        while (leftCnt < left.length && rightCnt < right.length) {
            if (left[leftCnt] <= right[rightCnt]) {
                arr[arrCnt] = left[leftCnt];
                leftCnt++;
            } else {
                arr[arrCnt] = right[rightCnt];
                rightCnt++;
            }
            arrCnt++;
        }
        if (leftCnt === left.length) {
            for (arrCnt; arrCnt < arr.length; arrCnt++) {
                arr[arrCnt] = right[rightCnt];
                rightCnt++;
            }
        } else {
            for (arrCnt; arrCnt < arr.length; arrCnt++) {
                arr[arrCnt] = left[leftCnt];
                leftCnt++;
            }
        }
    }
}
let arr = [8,4,23,42,16,15];
mergeSort(arr);
console.log(arr);

// let n = arr.length;
// let mid = n / 2;
// let left = arr.slice(0, mid);
// let right = arr.slice(mid, n);
// console.log(`mid ${mid} // left ${left} // right ${right}`);
// mergeSort(arr);
// console.log(arr);

module.exports = mergeSort;
