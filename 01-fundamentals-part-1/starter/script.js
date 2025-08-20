// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

//HOUR 1

// let js = "amazing"
// console.log(40 + 8 + 23 - 10);
// console.log("GUMANA KA");


// console.log("=== VARIABLES ===");

// let firstName = "Angel";
// console.log(firstName);

// let age = 30;
// console.log(age);

// age = 31;
// console.log(age);

// const birthYear = 2005;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job);

// age = 51;

// let lastName = "Fernando";

// console.log("=== DATA TYPES ===");

// //Number
// age = 24;
// console.log(age);
// console.log(typeof age);

// //String
// let username = "infgel";
// console.log(username);
// console.log(typeof username);

// //Boolean
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);

// //Undefined
// let year;
// console.log(year);
// console.log(typeof year);

// //dynamic variable start as a number
// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// //change to a string
// dynamicVariable = "Now I'm a string!";
// console.log(dynamicVariable, typeof dynamicVariable);

// //change to a boolean
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

//HOUR 2
//basic operators
console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

//math operations
console.log("Math Operations:");
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15 / 3);
console.log("Exponentiation:", 2 ** 3);

//string concatenation
const firstName = "Angel";
const lastName = "Fernando";
console.log(firstName + " " + lastName);

console.log("Hello " + "World" + "!");
console.log("I am " + 20 + " years old");

//assignment operators
console.log ("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 5;
console.log("x start as:", x);

x += 10; // Same as: x = x + 10 = 25
console.log("After x += 10:", x);

x *= 4; // Same as: x = x * 4 = 100
console.log("After x *= 4:", x);

x /= 2; // Same as: x = x / 2 = 50
console.log("After x /= 2:", x);

x++; // Same as: x = x + 1
console.log("After x++:", x); // 51

x--; // Same as: x = x - 1
x--; // Again: x = x - 1
console.log("After x-- twice:", x); // 49

//comparison operators
console.log("=== COMPARISON OPERATORS ===");

console.log("Age Comparison:");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(ageJonas <30);

console.log("Number Comparison:");
console.log (25 > 20);
console.log(15 < 10);
console.log(18 >= 18);
console.log(16 <= 15);

//storing comparison results
const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge);

const isJonasOlder = ageJonas > ageSarah;
console.log("Jonas is older:", isJonasOlder); // true

//complex comparison
console.log("Complex Comparison:");
console.log(now - 1991 > now - 2018);

//assignment precedence
let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

//parentheses override everything
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
