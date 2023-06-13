const readlineSync = require("readline-sync");
/*
//ex 4.1 documentation: this is a function to calaculate the surface of a rectangle! 

let calcSurface = (length, width) => {
  return length * width;
};

let length = readlineSync.question("Can you give me a length please?");
let width = readlineSync.question("Can you give me a width please?");

console.log("The surface of this rectangle is  " + calcSurface(length, width));




//ex. 4.2

// Generates a random integer between 1 and 10.

function rand10() {
  return Math.floor(Math.random() * 10) + 1;
}

console.log(rand10());

//ex. 4.3

 * Generates an array of random integers between 1 and 10.
 *
 * @param {number} n - The number of random numbers to generate.
 * @returns {number[]} An array of n random integers between 1 and 10.
 
function multiRand(n) {
  return Array.from({ length: n }, () => rand10());
}

// Ask the number of random numbers to generate
const count = parseInt(
   readlineSync.question("How many random numbers do you want to generate? ")
);

// Generate random numbers
const randomNumbers = multiRand(count);

// Display the random numbers
console.log("Random Numbers: ", randomNumbers);

*/

//ex.4.4

/**
 * Calculates the average of an array of numbers.
 *
 * @param {number[]} arr - An array of numbers.
 * @returns {number} The average of the numbers in the array.
 */

/*
function average(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

/**
 * Finds the minimum element in an array of numbers.
 *
 * @param {number[]} arr - An array of numbers.
 * @returns {number} The minimum element in the array.
 */
/*
function min(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return Math.min(...arr);
}


/**
 * Finds the maximum element in an array of numbers.
 *
 * @param {number[]} arr - An array of numbers.
 * @returns {number} The maximum element in the array.
 */

/*

function max(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return Math.max(...arr);
}
function rand10() {
  return Math.floor(Math.random() * 10) + 1;
}

/**
 * Generates an array of random integers between 1 and 10.
 *
 * @param {number} n - The number of random numbers to generate.
 * @returns {number[]} An array of n random integers between 1 and 10.
 */

/*
function multiRand(n) {
  return Array.from({ length: n }, () => rand10());
}
/*
// Ask the number of random numbers to generate
const count = parseInt(
  readlineSync.question("How many random numbers do you want to generate? ")
);

// Generate random numbers
const randomNumbers = multiRand(count);

// Calculate average, minimum, and maximum
const avg = average(randomNumbers);
const minimum = min(randomNumbers);
const maximum = max(randomNumbers);

// Display the results
console.log("Random Numbers: ", randomNumbers);
console.log("Average: ", avg);
console.log("Minimum: ", minimum);
console.log("Maximum: ", maximum);

*/

// ex 4.5

/*
function calcDistance(pointA, pointB) {
  const [x1, y1] = pointA;
  const [x2, y2] = pointB;

  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return distance;
}

// Program
const pointA = [1, 1];
const pointB = [2, 2];
console.log("Distance:", calcDistance(pointA, pointB));

const pointC = [1, 1];
const pointD = [3, 1];
console.log("Distance:", calcDistance(pointC, pointD));

const pointE = [4, 1];
const pointF = [1, 1];
console.log("Distance:", calcDistance(pointE, pointF));

const pointG = [-2, 2];
const pointH = [2, -2];
console.log("Distance:", calcDistance(pointG, pointH));

*/

//ex 4.6

/**
 * Calculates the factorial of a number using recursion.
 *
 * @param {number} a - The number for which to calculate the factorial.
 * @returns {number} The factorial of the input number.
 */
function factorial(a) {
  if (a === 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}

const number = parseInt(
  readlineSync.question("which number's factorial would you like? ")
);
const result = factorial(number);
console.log(`Factorial of ${number} is: ${result}`);
