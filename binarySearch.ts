function binarySearch(arr: number[], target: number): number {
  if (arr.length === 0) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));   // 3
console.log(binarySearch([1, 3, 5, 7, 9, 11], 4));   // -1
console.log(binarySearch([], 1));                     // -1
