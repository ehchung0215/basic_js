// // const prompt = require("prompt-sync")({ sigint: true });

// // console.log("Hello let's print your name");

// // const name = prompt("what is your name? ");

// // const age = prompt("how old are you? ");

// // const job = prompt("what do you do for living? ");

// // console.log(
// //   "My name is " + name + ". I am " + age + " years old" + " my job is " + job
// // );

// // const favoriteFoods = ["pizza", "burgers", "steak", "sushi"];

// const baum = {
//   courses: ["QA", "web-dev", "kids-coding"],
//   students: [{name:"Esther", age:26, enrolled:true},
//     {name:"Josh", age:20, enrolled:true},
//     {name:"Inchan", age:27, enrolled:true},
//     {name:"DJ", age:42, enrolled:true}],
//   currentPeriod:"Fall2024"
//   };

// let qa = baum.courses[0]
// let fanny = baum.students[0].name
// let yj = baum.students[1].name
// let ic = baum.students[2].name
// let dj = baum.students[3].name

// if (qa === 'QA') {
// console.log(fanny, yj, ic, dj)

// }

// const baumAcademy = {
//   courses: ["Web", "QA", "Kids-Coding"],
//   classHour: {
//     tuesday: {
//       day: "tuesday",
//       startHour: "6pm",
//       endHour: "9pm",
//       isLunchTime: false
//     },
//     thursday: {
//       day: "thursday",
//       startHour: "6pm",
//       endHour: "9pm",
//       isLunchTime: false
//     },
//     saturday: {
//       day: "saturday",
//       startHour: "10am",
//       endHour: "3pm",
//       isBreakTime: true
//     }
//   }
// }

// if tuesday, console.log "tuesday, class hour is from 6pm to 9pm"
// if thursday, console.log "thursday, class hour is from 6pm to 9pm"
// if saturday, console.log "saturday, class hour is from 10am to 3pm"

// advanced problem
// under if statement, add one more if statement checking `isLunchTime` condition
// if true, console.log we have lunch time
// if false, console.log we don't have lunch time

// create an object with keys, "name", "address", "favoriteFoods" and "pets".  "favoriteFoods"
// should be an array of your favorite foods and "pets" should be an object that has a "type" key
// and the value should be the type of animal you have as a pet

// const testObject = {
//   Name: "Esther",
//   Address: "5325 Rosemallow Circle",
//   favoriteFoods: ["Burger", "Sushi", "Steak", "Ddukbokee"],
//   pets: {
//     type: "Dog"
//   },
//   }

//  const obj = {};
//  console.log(obj)
//  obj.name = 'esther'
//  console.log(obj)

// let age = 30;
// while (age > 15) {
//   console.log('I am so old!');
// }

// let age = 15;
// while (age < 16) {
//   console.log('I am so old!');
//   age = age + 1

// let array = ['DJ', 'Marco', 'Phil', 'Inchan', 'Esther', 'Josh', 'Xtina', 'DM', 'Doyle'];
// let index = 0;

// while (index < array.length) {
//   console.log(array[index]);
//   index = index + 1
// }

// while (age < 100) {
//   console.log(age);
//   age = age + 1
// }

// let number = 1;
// while (number < 50) {
//   if(number % 2 === 0){
//     console.log(number)
//   }
//   number = number + 1
// }

// const baum = [{name: "Josh", age: 22}, {name: "Marco", age: 36}, {name: "Matthew", age: 39}, {name: "Inchan", age: 38}]
// let index = 0;
// while (index < baum.length) {
//   console.log(baum[index].name, baum[index].age);
//   index = index + 1
// }

// let number = 50
// while (number >= 0) {
//     console.log(number);
//   number = number - 1
// }

// for (let i = 0; i < 10; i++){
//   console.log(i)
// }

// for (let i = 0; i < 50; i++){
//   console.log(i)
// }

// const names = ["Phil", "Esther", "Josh", "Miran"]
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// const baum = [{name: "Phil", age: 39}, {name: "Esther", age: 36}, {name: "Josh", age: 22}, {name: "Matthew", age: 38}]
// for (let i = 0; i < baum.length; i++) {
//   console.log(baum[i].name, baum[i].age)
// }

// const names = ["Phil", "Esther", "Josh", "Miran"]
// for (let i = 1; i < names.length; i++) {
//   console.log(names[i]);
// }

// const names = ["Phil", "Esther", "Josh", "Miran"]
// for (let i = 0; i < names.length; i++) {
//   if (i !== 1) {
//     console.log(names[i]);
//   }

// }
//!== means does not

// const names = ["Phil", "Esther", "Josh", "Miran"]
// for (let i = 0; i < names.length; i++) {
//   if (i === 1) {
//   } else {
//     console.log(names[i]);
//   }

// // }
// const names = ["Phil", "Esther", "Josh", "Miran"]
// for (let i = 0; i < names.length; i++) {
//   if (names[i] !== "Esther") {
//     console.log(names[i]);
//   }

// }

// const names = ["Phil", "Josh", "Miran", "Esther", "Bob", "Frank"];
// for (let i = 0; i < names.length; i++) {
//   if (i === names.length - 1) {
//     console.log(names[i])
//   }
// }

// const array = [...Array(134).keys()];
// for (let i = 0; i < array.length; i++) {

//   if (i === array[0]) {
//     console.log(array[i])
//   }
//   if (i === array.length - 1) {
//     console.log(array[i])
//   }
// }

// const array = [...Array(134).keys()];
// for (let i = 0; i < array.length; i++) {
//   if (i === array[0] || i === array.length - 1) {
//     console.log(array[i]);
//   }
// }

// const students = [
//   {
//     name: "Phil",
//     course: "Web",
//     days: ["Tuesday", "Thursday", "Saturday"],
//   },
//   {
//     name: "DJ",
//     course: "Web",
//     days: ["Tuesday", "Thursday", "Saturday"],
//   },
//   {
//     name: "DC",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//   },
//   {
//     name: "Inchan",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//   },
//   {
//     name: "Esther",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//   },
//   {
//     name: "Josh",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//   },
// ];
// for (let i = 0; i < students.length; i++) {
//   if (students[i].course !== "Web") {
//     console.log(students[i].name);
//   }
// }

// const students = [
//   {
//     name: "Phil",
//     course: "Web",
//     days: ["Tuesday", "Thursday", "Friday", "Saturday"],
//     hasPriorExperience: true,
//   },
//   {
//     name: "DJ",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//     hasPriorExperience: true,
//   },
//   {
//     name: "DC",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//     hasPriorExperience: true,
//   },
//   {
//     name: "Inchan",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Friday", "Saturday"],
//     hasPriorExperience: false,
//   },
//   {
//     name: "Esther",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Friday", "Saturday"],
//     hasPriorExperience: false,
//   },
//   {
//     name: "Josh",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//     hasPriorExperience: false,
//   },
// ];
// for (let i = 0; i < students.length; i++) {
//   if (students[i].course === "QA" && students[i].hasPriorExperience === false) {
//     console.log(students[i].name);
//   }
// }

// for (let i = 0; i < students.length; i++) {
//   for (let j = 0; j < students[i].days.length; j++) {
//     if (students[i].days[j] === "Friday") {
//       console.log(students[i].name);
//     }
//   }
// }

// for (let i = 0; i < students.length; i++) {
//   if (
//     students[i].course === "Web" ||
//     students[i].hasPriorExperience === false
//   ) {
//     console.log(students[i].name);
//   }
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// let numberReverse = [];
// for (let i = 5; i >= 0; i--) {
//   numberReverse.push(numbers[i]);
// }
// console.log(numberReverse);

// for (let i = 5; i >= 0; i--) {
//   console.log(numbers[i]);
// }

// const cars = {
//   mercedes: {
//     models: [
//       { name: "C Class", isAvailable: true },
//       { name: "E Class", isAvailable: true },
//       { name: "S Class", isAvailable: true },
//       { name: "G Class", isAvailable: true },
//     ],
//   },
//   honda: {
//     models: [
//       { name: "Pilot", isAvailable: true },
//       { name: "Civic", isAvailable: true },
//       { name: "Accord", isAvailable: true },
//     ],
//   },
//   tesla: {
//     models: [
//       { name: "Model 3", isAvailable: false },
//       { name: "Model S", isAvailable: false },
//       { name: "Model Y", isAvailable: false },
//       { name: "Cyber Truck", isAvailable: false },
//       { name: "Model X", isAvailable: false },
//     ],
//   },
// };

// for (let i = 0; i < cars.length; i++) {
//   for (let j = 0; j < cars[i].tesla.length; j++)
//     for (let m = 0; m < cars[i].tesla[j].models.length; m++)
//       if (cars[i].tesla[j].models[m]) {
//         console.log(cars[i].tesla[j].models[m].name);
//       }
// }

// for (let i = 0; i < cars.tesla.models.length; i++) {
//   console.log(cars.tesla.models[i].name);
// }

// const carKeys = Object.keys(cars); // ['tesla', ...]

// for (let i = 0; i < carKeys.length; i++) {
//   for (let j = 0; j < cars[carKeys[i]].models.length; j++) {
//     if (cars[carKeys[i]].models[j].isAvailable === true) {
//       console.log(cars[carKeys[i]].models[j].name);
//     }
//   }
// }

// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (const number of numbers) {
// console.log(number);
// }

// const tesla = [
//   { name: "Model 3", isAvailable: false },
//   { name: "Model S", isAvailable: false },
//   { name: "Model X", isAvailable: false },
//   { name: "Model Y", isAvailable: false },
//   { name: "Cyber Truck", isAvailable: false },
// ];

// for (const car of tesla) {
//   console.log(car.name);
// }

// const tesla = [
//   { name: "Model S", isAvailable: false },
//   { name: "Model 3", isAvailable: true },
//   { name: "Model X", isAvailable: false },
//   { name: "Model Y", isAvailable: true },
//   { name: "Cyber Truck", isAvailable: false },
// ];

// for (const model of tesla) {
//   if (model.isAvailable === true) {
//     console.log(model.name);
//   }
// }

// const number = [1, 2, 3, 4, 5, 6];

// for (const num of number) {
//   if (num % 2 === 0) {
//     console.log("even number is", num);
//   }
// }

// const numbers = [5, 67, 10, 25, 17, 9, 3, 21, 64, 78];

// let biggestNumber = 0;

// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }

// console.log(biggestNumber);

// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);

// const homesList = [
//   { state: "Virginia", sold: 130 },
//   { state: "Maryland", sold: 34000 },
//   { state: "New York", sold: 63 },
//   { state: "California", sold: 100 },
//   { state: "New Jersey", sold: 234 },
// ];

// function homesSold(homes) {
//   let soldNum = 0;

//   for (const home of homes) {
//     soldNum = soldNum + home.sold;
//   }

//   console.log(soldNum);
// }

// homesSold(homesList);

// console.log(soldNum);

// for (let i = 0; i < homes.length; i++) {
//   soldNum = soldNum + homes[i].sold;
// }
// console.log(soldNum);

// function myName() {
//   console.log("Hello, my name is Esther.");
// }

// myName();

// function myName(name) {
//   console.log("Hello, my name is " + name);
// }

// myName("Esther");

// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// add(2, 3);
// add(3, 5);

// function product(num1, num2) {
//   console.log(num1 * num2);
// }

// product(3, 2);
// product(15, 15);

// Create a function that calculates given two numbers by given four functions
// for example
// calculateNumbers(1, 2, "+")
// OUTPUT : "1 + 2 = 3" or "3" or 3
// calculateNumbers(2, 5, "*")
// OUTPUT : "2 * 5 = 10" or "10" or 10

// function calculateNumbers(num1, num2, operation) {
//   if (operation === "+") {
//     console.log(num1 + num2);
//   }
//   if (operation === "-") {
//     console.log(num1 - num2);
//   }
//   if (operation === "*") {
//     console.log(num1 * num2);
//   }
//   if (operation === "/") {
//     console.log(num1 / num2);
//   }
// }

// calculateNumbers(3, 7, "+");
// calculateNumbers(10, -2, "-");
// calculateNumbers(8, 9, "*");
// calculateNumbers(24, 6, "/");

// const baumAcademy = {
//   courses: ["Web", "QA", "Kids-Coding"],
//   classHour: {
//     tuesday: {
//       day: "tuesday",
//       startHour: "6pm",
//       endHour: "9pm",
//       isLunchTime: false,
//     },
//     thursday: {
//       day: "thursday",
//       startHour: "6pm",
//       endHour: "9pm",
//       isLunchTime: false,
//     },
//     saturday: {
//       day: "saturday",
//       startHour: "10am",
//       endHour: "3pm",
//       isBreakTime: true,
//     },
//   },
// };

// if tuesday, console.log "tuesday, class hour is from 6pm to 9pm"
// if thursday, console.log "thursday, class hour is from 6pm to 9pm"
// if saturday, console.log "saturday, class hour is from 10am to 3pm"

// function classHour(day) {
//   if (day === baumAcademy.classHour.tuesday.day) {
//     console.log(
//       `${day}, class hour is from ${baumAcademy.classHour.tuesday.startHour} to ${baumAcademy.classHour.tuesday.endHour}`
//     );
//   }
//   if (day === baumAcademy.classHour.thursday.day) {
//     console.log(
//       `${day}, class hour is from ${baumAcademy.classHour.thursday.startHour} to ${baumAcademy.classHour.thursday.endHour}`
//     );
//   }
//   if (day === baumAcademy.classHour.saturday.day) {
//     console.log(
//       `${day}, class hour is from ${baumAcademy.classHour.saturday.startHour} to ${baumAcademy.classHour.saturday.endHour}`
//     );
//   }
// }
// classHour("tuesday");
// classHour("thursday");
// classHour("saturday");

// Create a function that takes in a string and number as arguments, and prints out the string that many times.
// For example:
// printStrings("hello", 3)
// Prints:
// "hello"
// "hello"
// "hello"

// function halloween(a, num1) {
//   console.log(a);
//   console.log(a);
//   console.log(a);
// }

// halloween("Boo", 3);

// function halloween(scarySaying, numberOfTimes) {
//   for (let i = 0; i < numberOfTimes; i++) {
//     console.log(scarySaying);
//   }
// }

// halloween("Beetlejuice", 3);
// halloween("boo", 5);

// Create a function that takes 1 argument called “age” which will be a number.  The function should print the year you were born in.
// Example:
// yearBorn(39);
// Output: 1985

// function birthYear(currentYear, age, operation) {
//   if (operation === "-") {
//     console.log(currentYear - age);
//   }
// }

// birthYear(2024, 36, "-");

// function birthYear(age) {
//   console.log(2024 - age);
// }

// birthYear(36);

// const twitter = {
//   tweets: [
//     {
//       userId: 1,
//       content: "Twitter is awesome!",
//     },
//     {
//       userId: 1,
//       content: "Man, twitter sucks!",
//     },
//     {
//       userId: 2,
//       content: "What is twitter?",
//     },
//   ],
//   users: [
//     {
//       id: 1,
//       name: "Phil",
//     },
//     {
//       id: 2,
//       name: "Marco",
//     },
//   ],
// };
// function getUserTweets() {
//   for (let i = 0; i < twitter.tweets.length; i++) {
//     if (twitter.tweets[i].userId === 2) {
//       console.log(twitter.tweets[i].content);
//     }
//   }
// }

// getUserTweets();

// const orders = [
//   {
//     orderId: 1001,
//     userId: 1,
//     productIds: [101, 103],
//     totalAmount: 999.98,
//     status: "Shipped",
//   },
//   {
//     orderId: 1002,
//     userId: 2,
//     productIds: [102],
//     totalAmount: 599.99,
//     status: "Pending",
//   },
//   {
//     orderId: 1003,
//     userId: 3,
//     productIds: [104, 106],
//     totalAmount: 499.98,
//     status: "Delivered",
//   },
//   {
//     orderId: 1004,
//     userId: 4,
//     productIds: [105, 107],
//     totalAmount: 649.98,
//     status: "Canceled",
//   },
//   {
//     orderId: 1005,
//     userId: 5,
//     productIds: [101, 105],
//     totalAmount: 1299.98,
//     status: "Shipped",
//   },
//   {
//     orderId: 1006,
//     userId: 6,
//     productIds: [103, 106],
//     totalAmount: 399.98,
//     status: "Pending",
//   },
// ];

// function shippedOrders() {
// for (let i = 0; i < orders.length; i++) {
//   if (orders[i].status === "Pending") {
//     console.log(orders[i].userId);
//   } else if (orders[i].status === "Shipped") {
//     console.log(orders[i].orderId);
//   } else {
//     console.log(orders[i].status);
//   }
// }
// let totalAmt = 0;
// for (let i = 0; i < orders.length; i++) {
//   console.log(orders[i].totalAmount);
//   if (orders[i].status === "Shipped") {
//     totalAmt = totalAmt + orders[i].totalAmount;
//   }
// }
// console.log(totalAmt);

//   let shippedOrders = 0;
//   for (let i = 0; i < orders.length; i++) {
//     if (orders[i].status === "Shipped") {
//       shippedOrders++;
//     }
//   }
//   console.log(shippedOrders);
// }

// shippedOrders();

// shippedOrders("Shipped");
// shippedOrders("Canceled");
// shippedOrders("Delivered");

// print Shipped orderIds
// print Pending userIds
// for any other status passed into the function thats not shipped or pending, just return status

// advanced questions
// write a for loop and sum total amount of shipped orders

// very advanced questions
// write a for loop and sum total amount of shipped, delivered and pending orders

// const users = [
//   {
//     id: 1,
//     name: "Alice",
//     age: 25,
//     email: "alice@example.com",
//     isActive: true,
//   },
//   {
//     id: 2,
//     name: "Bob",
//     age: 30,
//     email: "bob@example.com",
//     isActive: false,
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     age: 28,
//     email: "charlie@example.com",
//     isActive: true,
//   },
// ];

// function usersAge() {
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === "Charlie") {
//       return users[i].age;
//     }
//   }
// }
// const age = usersAge();
// console.log(age);

// function usersEmail() {
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === "Bob") {
//       return users[i].email;
//     }
//   }
// }
// const email = usersEmail();
// console.log(email);

// function usersId() {
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === "Alice") {
//       return users[i].id;
//     }
//   }
// }
// const id = usersId();
// console.log(id);

// print Charlie's age
// print Bob's email
// print Alice's id

// advanced questions
// write a for loop and print name if user is active

// function getNumberOne() {
//   return 1;
// }

// const one = getNumberOne();

// console.log(one);

// function getUserTweets(userId) {
//   const twitter = {
//     tweets: [
//       {
//         userId: 1,
//         content: "Twitter is awesome!",
//       },
//       {
//         userId: 1,
//         content: "Man, twitter sucks!",
//       },
//       {
//         userId: 2,
//         content: "What is twitter?",
//       },
//     ],
//     users: [
//       {
//         id: 1,
//         name: "Phil",
//       },
//       {
//         id: 2,
//         name: "Marco",
//       },
//     ],
//   };

//   let userTweets = [];

//   for (let i = 0; i < twitter.tweets.length; i++) {
//     if (twitter.tweets[i].userId === userId) {
//       userTweets.push(twitter.tweets[i].content);
//     }
//   }
//   return userTweets;
// }
// // this function should return an array of tweets by the userId passed into the function
// // const userT = getUserTweets(1);
// console.log(getUserTweets(1));
// console.log(getUserTweets(2));

// const events = [
//   { eventId: 1, name: "Conference", date: "2024-05-15", location: "New York", attendees: ["Alice", "Charlie"] },
//   { eventId: 2, name: "Workshop", date: "2024-06-20", location: "San Francisco", attendees: ["Bob"] },
//   { eventId: 3, name: "Meetup", date: "2024-07-10", location: "Toronto", attendees: ["Alice", "Ethan", "George"] },
//   { eventId: 4, name: "Seminar", date: "2024-08-05", location: "Vancouver", attendees: ["Charlie", "Diana"] },
//   { eventId: 5, name: "Networking", date: "2024-09-15", location: "London", attendees: ["Fiona", "George"] },
//   { eventId: 6, name: "Webinar", date: "2024-10-20", location: "Online", attendees: ["Alice", "Bob", "Charlie", "Diana"] },
//   { eventId: 7, name: "Hackathon", date: "2024-11-01", location: "Sydney", attendees: ["Ethan", "Fiona"] },
// ];

// print Alice and event name in each object

// advanced questions
// write a for loop and print event name, location and date where George attends

// test.beforeEach(async ({ page }) => {
//   await page.goto("https://baumacademy.com");
// });

// test.describe("Baum Academy", () => {
// test("should see welcome message", async ({ page }) => {
// const welcomeMsg = page.getByText("Welcome to Baum Academy");
// await expect(welcomeMsg)toBeVisible();
// });
// });

//     write a function named findLetterIndex that accepts two parameters: a string and a character.
//     The function should return an array containing the indices of all occurrences of the specified character within the string.
//     If the character does not appear in the string, the function should return an empty array.

// example :
// - findLetterIndex("hello world", "l") => output : [2, 3, 9]
// - findLetterIndex("banana", "a") => output : [1, 3, 5]

// function findLetterIndex(word, character) {
//   let output = [];
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === character) {
//       // as long as i is less than the length of the word, keep doing this
//       output.push(i);
//     }
//   }
//   return output;
// }

// console.log(findLetterIndex("banana", "a"));
// console.log(findLetterIndex("excuse me", "e"));

// Write a function called findVowelIndices that takes a string as an argument and returns an array of indices
// where vowels (a, e, i, o, u, case-insensitive) occur in the string.

// findVowelIndices("hello"); // Output: [1, 4]
// findVowelIndices("Javascript"); // Output: [1, 4, 8]

// function findVowelIndices(word) {
//   const a = "a";
//   const e = "e";
//   const AI = "i";
//   const o = "o";
//   const u = "u";
//   let output = [];
//   for (let i = 0; i < word.length; i++) {
//     if (
//       word[i] === a ||
//       word[i] === e ||
//       word[i] === AI ||
//       word[i] === o ||
//       word[i] === u
//     ) {
//       output.push(i);
//     }
//   }
//   return output;
// }

// console.log(findVowelIndices("Family Disney Trip"));

// const removeDuplicates = (numArry) => {
//   const newArr = [numArry[0]];

//   for (let i = 0; i < numArry.length; i++) {
//     let isDuplicated = false;

//     for (let j = 0; j < newArr.length; j++) {
//       if (newArr[j] === numArry[i]) {
//         isDuplicated = true;
//         break;
//       }
//     }
//     if (!isDuplicated) {
//       newArr[newArr.length] = numArry[i];
//     }
//   }
//   return newArr;
// };

// console.log(
//   removeDuplicates([1, 4, 2, 3, 4, 1, 4, 1, 2, 4, 6, 6, 2, 1, 12, 21])
// );

// const removeDuplicates1 = (numArry) => {
//   const output = [];
//   const compareIndex = (number, index) => {
//     return index === numArry.indexOf(number);
//   };
//   for (let i = 0; i < numArry.length; i++) {
//     if (compareIndex(numArry[i], i)) {
//       output.push(numArry[i]);
//     }
//   }
//   return output;
// };

// const removeDuplicates3 = (array) => {
//   return array.filter((num, index) => index === array.indexOf(num));
// };
// Create a function that takes an array of numbers and return the first repeating number.

// Example:  [1,2,3,4,5,6,7,7,8,8,9,10,10]
// Returns 7 because 7 is the first number that is repeated.

// Example 2: [1,4,3,5,1,6,4,5]
// Returns 1

// Hint:  User a nested for loop

// const firstRepeatingNumber = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         return array[i];
//       }
//     }
//   }

//   return -1;
// };

// const array = [1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 10];
// console.log(firstRepeatingNumber(array));

// const firstRepeatingNumber = (array) => {
//   const seen = new Set();

//   for (let num of array) {
//     if (seen.has(num)) {
//       return num;
//     }
//     seen.add(num);
//   }

//   return -1;
// };

// function hasSumEqualingTarget(array, target) {
//   const seenNumbers = new Set();

//   for (let num of array) {
//     const complement = target - num;

//     if (seenNumbers.has(complement)) {
//       return true; // Found two numbers that sum to the target
//     }

//     seenNumbers.add(num); // Add current number to the set for future checks
//   }

//   return false; // No two numbers sum to the target
// }

// const anagrams = (s, t) => {
//   if (s.split("").sort().join("") === t.split("").sort().join("")) {
//     return true;
//   }

//   return false;
// };
// console.log(anagrams("racecar", "carrace"));
// console.log(anagrams("listen", "silent"));

// const anagrams = (s, t) => {
//   // If lengths are different, they can't be anagrams
//   if (s.length !== t.length) return false;

//   const count = {};

//   // Count the frequency of digits in the first string (s)
//   for (let char of s) {
//     count[char] = (count[char] || 0) + 1;
//   }

//   // Decrease the frequency count using the second string (t)
//   for (let char of t) {
//     if (!count[char]) {
//       return false; // If there's no match, they are not anagrams
//     }
//     count[char] -= 1;
//   }

//   // If all counts are zero, the strings are anagrams
//   return Object.values(count).every((val) => val === 0);
// };

// // Example usage
// console.log(anagrams("1234", "4321")); // true
// console.log(anagrams("112233", "321112")); // true
// console.log(anagrams("123", "456")); // false
// console.log(anagrams("987654", "654789")); // true

// function areAnagrams(arr1, arr2) {
//   // If lengths are different, they can't be anagrams
//   if (arr1.length !== arr2.length) return false;

//   // Create a frequency object to count occurrences of numbers
//   const frequencyCount = {};

//   // Count the occurrences of numbers in the first array (arr1)
//   for (let i = 0; i < arr1.length; i++) {
//     const num = arr1[i];
//     frequencyCount[num] = (frequencyCount[num] || 0) + 1;
//   }

//   // Check the second array (arr2) against the frequency count
//   for (let i = 0; i < arr2.length; i++) {
//     const num = arr2[i];

//     if (!frequencyCount[num]) {
//       // If the number isn't found or its count is 0, they are not anagrams
//       return false;
//     }

//     // Decrease the count for the matched number
//     frequencyCount[num] -= 1;
//   }

//   // If all counts are 0, the arrays are anagrams
//   return Object.values(frequencyCount).every((count) => count === 0);
// }

// // Example usage:
// console.log(areAnagrams([1, 2, 3, 4], [4, 3, 2, 1])); // true
// console.log(areAnagrams([1, 1, 2, 3], [3, 2, 1, 1])); // true
// console.log(areAnagrams([1, 2, 3], [4, 5, 6])); // false
// console.log(areAnagrams([10, 20, 30], [30, 10, 20])); // true

// function isAnagram(String, string2) {
//   //string = 'car'
//   //string2 = 'atc'
//   const sortedString = string.split('').sort().join(''); //['a','c','r']
//   const sortedString2 = string2.split('').sort().join('');
//   return sortedString === sortedString2;
//   };

// function isAnagram(s, t) {
//   const charHash1 = {};
//   const charHash2 = {};

//   for (let i = 0; i < s.length; i++) {
//     if (charHAsh1[s[i]]) {
//       charHash1[s[i]]++;
//       // charHash1[s[i]] = charHash1[s[i]] + 1
//     } else {
//       charHash1[s[i]] = 1;
//     }
//   }

//   for (let j = 0; j < t.length; j++) {
//     if (charHash2[t[j]]) {
//       charHash2[t[j]]++;
//     } else {
//       charHash2[t[j]] = 1;
//     }
//   }

//   const lengthOfCharacters = Object.keys(charHash1).length;
//   const lengthOfCharacters2 = Object.keys(charHash2).length;

//   if (lengthOfCharacters !== lengthOfCharacters2) {
//     return false;
//   } else {
//     for (const [key, value] of Object.entries(charHash1)) {
//       if (charHash2[key] !== value) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// const findDivisible = (num, div) => {
//   let numbers = [];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % div === 0) {
//       numbers.push(num[i]);
//     }
//   }
//   return numbers;
// };
// console.log(findDivisible([10, 15, 20, 25, 30], 3));

// function findLongestWord(arr) {
//   // Check if the array is empty
//   if (arr.length === 0) return "";

//   // Initialize the longest word as the first word in the array
//   let longest = arr[0];

//   // Loop through the array and compare the length of each string
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > longest.length) {
//       longest = arr[i];
//     }
//   }

//   return longest;
// }

// console.log(
//   findLongestWord([
//     "cat",
//     "dog",
//     "elephant",
//     "bat",
//     "monkey",
//     "penguin",
//     "giraffe",
//   ])
// );

// function removeVowels(str) {
//   return str.replace(/[aeiouAEIOU]/g, "");
// }
// console.log(removeVowels("computer"));

// function removeVowels(str) {
//   const vowels = {
//     a: true,
//     e: true,
//     i: true,
//     o: true,
//     u: true,
//     A: true,
//     E: true,
//     I: true,
//     O: true,
//     U: true,
//   };
//   let result = "";

//   for (let char of str) {
//     if (!vowels[char]) {
//       result += char;
//     }
//   }

//   return result;
// }
// console.log(removeVowels("coding class"));

// Create a function where given an array of numbers, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example: [0,1,0,3,12]
// Result: [1,3,12,0,0]
// let fruits = ["apple", "banana"];

// let numbers = [0, 1, 2, 30, 0, 4, 5, 0, 0, 76, 98, 0, 6, 7];
// function moveZeros(array) {
//   let zeros = [];
//   let nonzeros = [];
//   // create a for loop if the number is zero, push to the zeros array, if the number is not 0, push to the nonzeros
//   // create another for loop
//   // zeros = [0, 0, 0, 0]
//   // nonzeros = [1, 2, 3, 4, 5, 6, 7, 0, 0, 0, 0]
//   // nonzeros.push(number)

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 0) {
//       zeros.push(array[i]);
//     } else {
//       nonzeros.push(array[i]);
//     }
//   }

//   for (let i = 0; i < zeros.length; i++) {
//     nonzeros.push(zeros[i]);
//   }

//   return nonzeros;
// }

// console.log(moveZeros(numbers));

// create a function that takes in an array of strings and return the longest word

// Example: ['hello', 'im so hungry', 'supercalafragisticexpialadocous']
// Returns 'supercalafragisticexpialadocous'

//Write a function sumDigits(num) that returns the sum of the digits of a number. Example: sumDigits('3723'); Returns: 15.
// const sumDigits = (num) => {
//   const splitNum = num.split("");
//   let sum = 0;
//   for (let i = 0; i < splitNum.length; i++) {
//     const int = Number(splitNum[i]);
//     sum = sum + int;
//   }
//   return sum;
// };
// console.log(sumDigits("1234"));

//Write a function findIndex(arr, value) that returns the index of a given value in an array if not exists, then return "not exist".
// Example: findIndex([10, 20, 30], 20); // Output: 1
// function findIndex(arr, value) {
//   return -1;
// }

// Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Example:
// sumArray([1, 2, 3, 4]); // Output: 10
// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6, 7]));

// 6. Write a function countVowels(str) that counts the number of vowels in a string.
// Example:
// countVowels("hello world"); // Output: 3
// function countVowels(str) {
//   let count = 0;
//   const vowels = "aeiouAEIOU";

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }]

//   }
//   return count;
// }
// console.log(countVowels("Excuse me, where is my money?"));

// function evenNumbers(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(evenNumbers(18));

// Write a function firstNonReatingChar(str) that finds the first character that does not repeat.
// Example: firstNonRepeat('swiss')
// Return: 'w'

// const firstNonRepeat = (word) => {
//   const array = word.split("");

//   let obj = {};

//   for (let i = 0; i < array.length; i++) {
//     if (!obj[array[i]]) {
//       obj[array[i]] = 1;
//     } else {
//       obj[array[i]]++;
//     }
//   }

//   const letters = Object.keys(obj);

//   for (const letter of letters) {
//     if (obj[letter] === 1) {
//       return letter;
//     }
//   }
// };
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

function getLarger(number, target) {
  let largerNumber = [];
  for (let i = 0; i < number.length; i++) {
    if (number[i] > target) {
      largerNumber.push(number[i]);
    }
  }
  return largerNumber;
}

console.log(getLarger([3, 6, 9, 7, 10, 19], 8));
