//01 Write a program that prints the numbers from 1 to 100, but for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    continue;
  }
  if (i % 3 === 0) {
    console.log("fizz");
    continue;
  }
  if (i % 5 === 0) {
    console.log("buzz");
    continue;
  }

  console.log(i);
}

//02 Write a program that takes an array of integers and returns the sum of all the numbers in the array that are greater than 10.

const arr = [1, 2, 43, 23, 21, 34, 7];
let sum = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    sum += arr[i];
  }
}
console.log(sum);

//03 Write a program that takes an array of integers and returns the average of all the numbers in the array.

const number = [11, 2, 33, 44];
let avg = 0;
for (i = 0; i < number.length; i++) {
  avg += number[i] / number.length;
}
console.log(avg);

//04 You are a lumberjack and you have been tasked with cutting down trees in a forest. Each tree has a certain height, and you have been given a height threshold of 10. You can only cut down trees that are taller than the threshold.Write a program that takes an array of tree heights and outputs the total height of the trees that you can cut down.

const treeHeight = [2, 4, 6, 13, 14, 11];
const threshold = 10;
let totalHeight = 0;
for (i = 0; i < treeHeight.length; i++) {
  if (treeHeight[i] > threshold) {
    totalHeight += treeHeight[i];
  }
}
console.log(totalHeight);
