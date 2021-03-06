function insertionSort(arr) {
    if (arr.length === 0) return [];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(insertionSort([8, 4, 23, 42, 16, 15]));

module.exports = insertionSort;
