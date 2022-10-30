// Write a function that takes in an array of integers and returns
// a sorted version of that array. Use Selection Sort algorithm.

// Sample input: array = [8, 5, 2, 9, 5, 6, 3]
// Sample output: [2, 3, 4, 5, 6, 8, 9]


//O(n^2) time | O(1) space complexity
function selectionSort(array) {
  let startIdx = 0;
  while(startIdx < array.length - 1) {
    let smallestIdx = startIdx;
    for(let i = startIdx + 1; i < array.length; i++) {
      if(array[smallestIdx] > array[i]) smallestIdx = i;
    }
    swap(startIdx, smallestIdx, array);
    startIdx++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}