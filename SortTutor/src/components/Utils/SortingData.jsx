// sortingData.js

export const bubbleSortData = {
    description: `Bubble Sort is an iterative sorting algorithm that imitates the movement of 
  bubbles in sparkling water. The bubbles represents the elements of the data structure.
  The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works 
  in the same way. It iterates through the data structure and for each cycle compares the 
  current element with the next one, swapping them if they are in the wrong order.
  It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting 
  algorithms with the same time complexity such as Selection Sort or Insertion Sort perform 
  better.`,
    complexity: {
        average: "O(n^2)",
        worst: "O(n^2)",
        best: "O(n)",
        space: "O(1)",
    },
    implementationCode: `
      function bubbleSort(arr) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
          }
        }
        return arr;
      }
    `,
};

// Similarly define data for other sorting techniques like selection sort, insertion sort, etc.
