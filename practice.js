// const firstName = "Esther";
// const lastName = "Chung";
// const birthday ="February, 15";
// let isMarried;
// const address = null;

// const classmates = ["Esther", "Josh", "DJ", "Inchan", "DC", "Phil"];
// console.log("OG Members!", classmates.length);
// classmates.push("Jenny");
// const classdays =["Tuesday", "Thursday", "Saturday"];
// const classmatesAndClassdays = [...classmates, ...classdays];

// const foods = ["chicken", "beef", "potatoes", "kimchi", "radish"];
// const foodAndPeople = [...foods, ...classmates];

// console.log("New Members Added!", classmates.length);
// console.log("Location of Josh", classmates.indexOf("Josh"));

// console.log("Remove an item from the end of the list", classmates.pop());
// console.log("classmates", classmates);

// const team = ["Josh", "Esther", "DJ", "Phil", "Inchan", "DC"];

// console.log(team[1], "and", team[2], "are friends")
// const BTS = [7, "Jin", "V", "JK", "Jimin" ];
// const BTSleader = "RM";

// console.log(BTS[0], "," BTS[2], "and" BTS[3], "are JiJinJung");

// const parents = { "Phil": ["Journey", "Audrey"],
// "Esther": ["Doyle"],
// "DC": ["Ashton", "Aiden"],
// "DJ": ["Ailee", "Hazel"],
// "Inchan": ["Moa"],
// "Josh": null}

// const names = ["Phil", "DC"];
// parents.Phil.pop();
// console.log(parents.Phil[0]);
// "Journey, Ashton, and Ailee are same grade";
// console.log(parents.Phil[0], ",", parents.DC[0], ", and", parents.DJ[0], "are in the same grade level.");

// let age = 36;
// let years = 20;
// let currentYear = 2024;

// let quarter =100/4;
// let quarter = 1/4;
// let dollar = quarter * 4;

// console.log("In", years, "years,  I will be", age+years, "years old.");
// console.log("I was born in the year", currentYear-age+".");
// console.log(dollar/4);

// triple equals makes sure that both value and data types are equal
// double equals just makes sure that the value is the equal (doesn't take data type into consideration)

// let number = 5;
// let remainder = (number % 2);
// // let isEven = (number % 2) === 0; for let number = 4;
// let isOdd = remainder === 1;
// let isOdd2 = remainder == "1";

// console.log(remainder);

//let isOneEven = 1 % 2 === 0
//let isTwoEven = 2 % 2 === 0

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let remainder = (number % 2);
// let isEven = (remainder) === 1;

// console.log("Is one even AND one is less than 5?", number[0] % 2 === 0 && number[0] < 5 );
// console.log("Is two even AND two is less than 5?", number[1] % 2 === 0 && number[1] < 5);
// console.log("Is three even AND three is less than 5?", number[2] % 2 === 0 && number[2] < 5);
// console.log("Is four even AND four is less than 5?", number[3] % 2 === 0 && number[3] < 5);
// console.log("Is five even AND five is less than 5?", number[4] % 2 === 0 && number[4] < 5);
// console.log("Is six even AND six is less than 5?", number[5] % 2 === 0 && number[5] < 5);
// console.log("Is seven even AND seven is less than 5?", number[6] % 2 === 0 && number[6] < 5);
// console.log("Is eight even AND eight is less than 5?", number[7] % 2 === 0 && number[7] < 5);
// console.log("Is nine even AND nine is less than 5?", number[8] % 2 === 0 && number[8] < 5);
// console.log("Is ten even AND ten is less than 5?", number[9] % 2 === 0 && number[9] < 5);

// let x = 5;
// let y = 12;
// let xGreaterThanTen = x > 10;
// let yGreaterThanTen = y > 10;
// let answer = xGreaterThanTen || yGreaterThanTen;

// console.log("Is x OR y greater than 10?", answer);

// const prompt = require("prompt-sync")({sigint: true});
// const number = prompt("pick a number between 1 and 30:");
// let isNumberEven = number % 2 === 0;
// console.log("Is the number you picked even?", isNumberEven);

// const canDrive = true; gives YAY
// const canDrive = false;
// if (canDrive) {console.log("Yay! I can drive.")} else {console.log("Booo")};

// const number = 14;
// const numberEven = true
// if (numberEven) {
//     console.log("Even")
// } else {
//     console.log("False")
// };

// const age = 15;
// const isOfAge = age >= 16;
// const hasDriversLicense = true;
// if (hasDriversLicense && isOfAge) {
//   console.log("I can drive!");
// } else {
//   console.log("I can't drive!");
// }

// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Example 1:

// Input: nums = [1,2,4,6
// Output: [48,24,12,8]

// Example 2:

// Input: nums = [-1,0,1,2,3]

// Output: [0,-6,0,0,0]

// function getProduct(nums) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     let product = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         product = product * nums[j];
//       }
//     }
//     result.push(product);
//   }
//   return result;
// }

// console.log(getProduct([1, 2, 4, 6, 8, 10]));

// Write a function average(arr) that calculates the average of numbers in an array.
// average([10, 20, 30]); // Output: 20

// const array = [10, 20, 30, 40, 50];

// function getAverage(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   return sum / numbers.length;
// }

// const result = getAverage(array);
// console.log(result);

// getLargest([3, 6, 9, 7, 10, 19]);
// Output: [19];

// function getLargest(numbers) {
//   let largestNumber = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largestNumber) {
//       largestNumber = numbers[i];
//     }
//   }
//   return largestNumber;
// }

// const result = getLargest([3, 9, 10, 5]);
// console.log(result);

// function getLarger(number, target) {
//   let largerNumber = [];
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] > target) {
//       largerNumber.push(number[i]);
//     }
//   }
//   return largerNumber;
// }

// console.log(getLarger([3, 6, 9, 7, 10, 19], 8));

// function getSecondLargest(number) {
//   let largestNumber = 0;
//   let secondLargest = 0;
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] > largestNumber) {
//       secondLargest = largestNumber;
//       largestNumber = number[i];
//     } else if (number[i] > secondLargest && number < largestNumber) {
//       secondLargest = number[i];
//     }
//   }
//   return secondLargest;
// }
// const array = [9, 6, 8, 10, 1, 2];
// console.log(getSecondLargest(array));

// //Write a function that filters out even numbers in an array (keep odd numbers). Look up array.filter method.
// const evenNumbers = [0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 8, 9, 10];
// const result = evenNumbers.filter => num%2 === 1
//   console.log(result);

// const odd = (arr) => {
//   return arr.filter((num) =>
//   num%2 === 1)
// }

// return only words that are longer than the word length
// const longWordsOnly = (wordsArray, length)
// longWordsOnly(["Hi", "World"], 4)
// returns ["World"]

const longWordsOnly = (wordsArray, length) => {
  return wordsArray.filter((word) => word.length > length);
};
console.log(longWordsOnly(["Hi", "Hello"], 4));
