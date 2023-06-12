const readlineSync = require("readline-sync");

//let userName = readlineSync.question("Can you give me your name please?");
//console.log("Hello " + userName);

//console.log("It works !!!");

//ex.1.1
//let age = 25;
//console.log(age);

/*ex 1.2

let name = "Kandemir";
let firstName = "Özlem";
let city = "Soumagne";

console.log(
  "Your name is " + name + " " + firstName + " and you live in " + city + "."
);

//ex 1.3

//let userFirstName = readlineSync.question("What's your name?");
//console.log("Hello " + userFirstName);

*/

/*ex. 1.4

let userName = readlineSync.question("what's your name?");
let userFirstName = readlineSync.question("What's your first name?");
let userCity = readlineSync.question("What's your city?");
console.log(
  "Your name is " +
    userName +
    " " +
    userFirstName +
    " and you live in " +
    userCity +
    "."
);
*/

//ex 1.5
/*

let number1 = readlineSync.question(
  "Enter the first number with decimal part:"
);
let number2 = readlineSync.question(
  "Enter the second number with decimal part:"
);

console.log(Math.floor(number1) * number2);



//ex.1.6

let number1 = readlineSync.question("Enter the first integer:");
let number2 = readlineSync.question("Enter the second integer:");

console.log(number1 % number2);



//ex2.1

let age = readlineSync.question("Enter your age");

if (age >= 18) {
  console.log("You're an adult");
} else {
  console.log("You're not an adult yet");
}


//ex 2.2
let minAge = parseInt(prompt("Enter the minimum age:"));
let maxAge = parseInt(prompt("Enter the maximum age:"));
let currentAge = parseInt(prompt("Enter the current age:"));

if (currentAge >= minAge && currentAge <= maxAge) {
  console.log("The current age is between the minimum and maximum age.");
} else {
  console.log("The current age is not between the minimum and maximum age.");
}

//ex. 2.3.1

var number = 1;
while (number <= 100) {
  if (number % 2 === 0) {
    console.log(number);
  }
  number++;
}


//ex. 2.3.2

for (let number = 2; number <= 100; number += 2) {
  console.log(number);
}



//ex 2.4

for (let number = 1; number <= 100; number++) {
  if (number % 2 === 0) {
    let divisionResult = number / 2;
    console.log("Even number:", number, "Division result:", divisionResult);
  } else {
    let multiplicationResult = number * 3;
    console.log(
      "Odd number:",
      number,
      "Multiplication result:",
      multiplicationResult
    );
  }
}



const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to ask the user for their favorite number
function askFavoriteNumber() {
  rl.question("What is your favorite number? ", function (answer) {
    const favoriteNumber = parseInt(answer);

    if (favoriteNumber !== 42) {
      console.log("Are you sure?");
      askFavoriteNumber();
    } else {
      console.log("Great! 42 is an awesome choice!");
      rl.close();
    }
  });
}

askFavoriteNumber();




//ex 2.6

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number between 1 and 7: ", function (answer) {
  const number = parseInt(answer);

  let dayOfWeek;
  switch (number) {
    case 1:
      dayOfWeek = "Monday";
      break;
    case 2:
      dayOfWeek = "Tuesday";
      break;
    case 3:
      dayOfWeek = "Wednesday";
      break;
    case 4:
      dayOfWeek = "Thursday";
      break;
    case 5:
      dayOfWeek = "Friday";
      break;
    case 6:
      dayOfWeek = "Saturday";
      break;
    case 7:
      dayOfWeek = "Sunday";
      break;
    default:
      dayOfWeek = "Invalid input";
  }

  console.log("The corresponding day of the week is:", dayOfWeek);
  rl.close();
});

*/

//ex 2.7

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number (n): ", function (answer) {
  const n = parseInt(answer);
  let sum = 0;

  let count = 0;
  (function askNumber() {
    if (count < n) {
      rl.question("Enter number " + (count + 1) + ": ", function (answer) {
        const num = parseInt(answer);
        sum += num;
        count++;
        askNumber();
      });
    } else {
      console.log("The sum of the numbers is:", sum);
      rl.close();
    }
  })();
});
