// // // 01 FUNCTIONS AND SCOPE
// // console.log("Part 2: Functions ready!");

// // // function declaration
// // console.log("=== FUNCTIONS ===");
// // function logger() {
// //     console.log("My name is Angel");
// // }
// // logger();
// // logger();
// // logger();

// // // functions with parameters
// // function fruitProcessor(apples, oranges) {
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }

// // const appleJuice = fruitProcessor(5, 3);
// // console.log(appleJuice);

// // const appleOrangeJuice = fruitProcessor(2, 4);
// // console.log(appleOrangeJuice);

// // // why functions matter
// // const juice1 = fruitProcessor(5, 3);
// // const juice2 = fruitProcessor(2, 4);
// // const juice3 = fruitProcessor(3, 2);
// // console.log(juice1);

// // // exercise 1: personal greeting
// // function greetStudent(studentName) {
// //     return `Hello ${studentName}, welcome to JavaScript!`;
// // }
// // console.log(greetStudent("Angel"));

// // // exercise 2: Simple Calculator
// // function addNumbers(a, b) {
// //     return a + b;
// // }

// // function multiplyNumbers(a, b) {
// //     return a * b;
// // }

// // console.log("Addition (5 + 3):", addNumbers(5, 3));
// // console.log("Addition (10 + 20):", addNumbers(10, 20));

// // console.log("Multiplication (4 * 7):", multiplyNumbers(4, 7));
// // console.log("Multiplication (6 * 9):", multiplyNumbers(6, 9));

// // // function expressions
// // const calcAge = function (birthYear) {
// //     return 2025 - birthYear;
// // }
// // console.log(calcAge(2005));
// // console.log(calcAge(1994));

// // // parameters vs arguments
// // function introduce (firstName, lastName, age) {
// //     const introduction = `Hi! I'm ${firstName} ${lastName} and I'm ${age} years old`;
// //     return introduction;
// // }

// // console.log(introduce("Angel", "Fernando", "20"));

// // // understanding return
// // function yearsUntilRetirement(birthYear, firstName) {
// //     const age = calcAge(birthYear); // Using one function inside another!
// //     const retirement = 65 - age;

// //     if (retirement > 0) {
// //     return `${firstName} retires in ${retirement} years`;
// //     } else {
// //     return `${firstName} has already retired!`;
// //     }
// // }

// // console.log(yearsUntilRetirement(2005, "Angel"));
// // console.log(yearsUntilRetirement(1960, "Angel"));

// // // function scope
// // // global scope
// // const globalVar = "I am global";

// // function testScope() {
// // const localVar = "I am local";
// //     console.log(globalVar);
// //     console.log(localVar);
// // }

// // testScope();
// // console.log(globalVar);

// // // coding challenge #1 - function calculator
// // function calcAverage(score1, score2, score3) {
// //     return (score1 + score2 + score3) / 3;
// // }

// // function checkWinner(avgDolphins, avgKoalas) {
// //     if (avgDolphins >=2 * avgKoalas) {
// //         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// //     } else if (avgKoalas >= 2 * avgDolphins) {
// //         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// //     } else {
// //         return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
// //     }
// // }

// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas   = calcAverage(65, 54, 49);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // scoreDolphins = calcAverage(85, 54, 41); // 60.0
// // scoreKoalas   = calcAverage(23, 34, 27); // 84.7
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // 02 ARRAYS AND DATA MANIPULATION
// console.log("Part 2: Arrays ready!");

// //creating arrays
// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// // friends
// const friends = ["Gwen", "Rain", "Fons"];
// console.log(friends);

// // Different data types in same array
// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);


// // array elements
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// // array starts counting from 0
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[1] = "Rainy"; // can change values in array
// console.log(friends);

// // arrays with expressions
// const firstName = "Angel";
// const jonas = [firstName, "Fernando", 2025 - 2005];
// console.log(jonas);

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// };

// const ages = [calcAge(2005), calcAge(2004), calcAge(2002)];
// console.log(ages);

// // array methods - array elements
// const newLength = friends.push("Rain");
// console.log(friends);
// console.log(newLength);

// friends.unshift("Ryan");
// console.log(friends);

// // removing elements
// const popped = friends.pop();
// const popped2 = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// // find an element
// // indexOf
// console.log(friends.indexOf("Gwen"));
// console.log(friends.indexOf("Rainy"));

// // includes
// console.log(friends.includes("Fons"));
// console.log(friends.includes("Gwen"));

// // array iteration - loops
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// friends.forEach(
//     function(friend, index) {
//         console.log(`Friend ${index + 1}: ${friend}`);
//     }
// )

// const grades2 = [85, 92, 78, 96, 88];
// let total = 0;
// for (let i = 0; i < grades2.length; i++) {
//     total += grades2[i];
// }
// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades2.forEach(function(grade) {
//     if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades2.length} students passed.`);

// coding challenge #2 - student grade manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// function calculateAverage(grades) {
//     let sum = 0;
//     for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//     }
// return sum / grades.length;
// }

// function findHighestGrade(grades) {
//     let highest = grades[0];
//     for (let i = 1; i < grades.length; i++) {
//     if (grades[i] > highest) {
//         highest = grades[i];
//     }
//     }
// return highest;
// }

// function findLowestGrade(grades) {
//     let lowest = grades[0];
//     for (let i = 1; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//         lowest = grades[i];
//     }
// }
// return lowest;
// }

// function countPassing(grades, passingGrade) {
// let count = 0;
//     for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//         count++;
//     }
//     }
// return count;
// }

// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(1)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

// JavaScript Fundamentals Part 2 - Hour 2

// PART 2 - HOUR 3: OBJECTS AND DATA STRUCTURES
// array limitation

// const angelArray = [
//     "Angel",
//     "Fernando",
//     2025 - 2005,
//     "studeny",
//     ["Gwen", "Rain", "Fons"],
// ];

// console.log(angelArray[0]);
// console.log(angelArray[1]);
// console.log(angelArray[2]);

// // basic object creation
// console.log("=== OBJECTS ===");

// const angel = {
//     firstName: "Angel",
//     lastName: "Fernando",
//     age: 2025-2005,
//     job: "student",
//     friends: ["Gwen", "Rain", "Fons"],
// };
// console.log(angel);

// //property access notation
// // dot notation
// console.log(angel.firstName);
// console.log(angel.lastName);
// console.log(angel.age);
// console.log(angel.job);
// console.log(angel.friends);

// // bracket notation
// console.log(angel["firstName"]);
// console.log(angel["lastName"]);
// console.log(angel["age"]);

// //bracket notation superpower
// const nameKey = "Name";
// console.log(angel["first" + nameKey]);
// console.log(angel["last" + nameKey]);

// // modifying existing properties
// angel.job = "programmer";
// angel["age"] = 20;
// console.log(angel);

// // objects can grow - add properties
// angel.location = "Philippines";
// angel["twitter"] = "@angelfaith";
// angel.hasDriversLicense = true;
// console.log(angel);

// // when to use dot vs bracket notation
// const property = "job";
// console.log(angel[property]);

// // objects vs arrays
// // Ordered, indexed data - think lists
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// // Named, descriptive data
// const person = {
//     name: "Angel",
//     age: 20,
//     occupation: "student",
// };

// const car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020,
//     color: "white",
// };

// // combining objects and arrays
// const student = {
//     name: "Angel",
//     grades: [85, 92, 78],
//     address: {
//     street: "Jhocson St",
//     city: "Manila",
//     },
// };

// console.log(student.grades[0]);
// console.log(student.address.city);

// object methods
// const angel = {
//     firstName: "Angel",
//     lastName: "Fernando",
//     birthYear: 2005,
//     job: "student",
//     friends: ["Gwen", "Rain", "Fons"],
//     hasDriversLicense: true,

//     calcAge: function (birthYear) {
//         return 2025 - birthYear;
//     },
// };

// console.log(angel.calcAge(2005));

// // this keyword
// const angelImproved = {
//     firstName: "Angel",
//     lastName: "Fernando",
//     birthYear: 2005,
//     job: "student",
//     friends: ["Gwen", "Rain", "Fons"],
//     hasDriversLicense: true,

//     calcAge: function () {
//     console.log(this);
//     return 2025 - this.birthYear;
//     },
// };

// console.log(angelImproved.calcAge());

// // advanced storing
// const angelAdvanced = {
//     firstName: "Angel",
//     lastName: "Fernando",
//     birthYear: 2005,
//     job: "student",
//     friends: ["Gwen", "Rain", "Fons"],
//     hasDriversLicense: true,

//     calcAge: function () {
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//         this.job
//         }, and she has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
//     },
// };

// console.log(angelAdvanced.calcAge());
// console.log(angelAdvanced.age);
// console.log(angelAdvanced.getSummary());

// // Coding Challenge #3 - User Profile System
// const user = {
//     firstName: "Angel",
//     lastName: "Fernando",
//     birthYear: 2005,
//     location: "Philippines",
//     interests: ["design", "coding", "travel"],
//     friends: [
//         { name: "Gwen", status: "active" },
//         { name: "Rain", status: "inactive" },
//         { name: "Fons", status: "active" },
//     ],
//     isActive: true,

//     calcAge: function () {
//         const currentYear = new Date().getFullYear();
//         this.age = currentYear - this.birthYear;
//     return this.age;
//     },

//     addFriend: function (name, status = "active") {
//         this.friends.push({ name, status });
//         return this.friends.length;
//     },

//     getActiveFriends: function () {
//         return this.friends.filter(friend => friend.status === "active").length;
//     },

//     toggleStatus: function () {
//         this.isActive = !this.isActive;
//         return this.isActive;
//     },

//     getSummary: function () {
//         this.calcAge();
//         return `
//     ----- User Profile -----
//     ${this.firstName} ${this.lastName}
//     ${this.age}
//     ${this.location}
//     ${this.isActive ? "Online ✅" : "Offline ❌"}
//     ${this.interests.join(", ")}
//     ${this.friends.length} total | ${this.getActiveFriends()} active
//     ------------------------
//         `;
//     },
// };

// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`After updates:`);
// console.log(user.getSummary());

// // JavaScript Fundamentals Part 2 - Hour 3

// PART 2 - HOUR 4: DOM MANIPULATION AND INTERACTIVITY
// query selectors - uses css selectors
const message = document.querySelector(".message");
console.log(message);

const button = document.querySelector("#btn");
console.log(button);

const heading = document.querySelector("h1");
console.log(heading);

console.log(message.textContent);
console.log(button.id);
console.log(heading.tagName);
console.log(heading.textContent);

// get element by ID
const buttonById = document.getElementById("btn");
console.log(buttonById);
console.log(buttonById === button); // true


// query selector all - multiple elements
const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);
console.log(allParagraphs[0]);
