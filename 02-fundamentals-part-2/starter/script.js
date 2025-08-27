// 01 FUNCTIONS AND SCOPE
console.log("Part 2: Functions ready!");

// function declaration
console.log("=== FUNCTIONS ===");
function logger() {
    console.log("My name is Angel");
}
logger();
logger();
logger();

// functions with parameters
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 3);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// why functions matter
const juice1 = fruitProcessor(5, 3);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);
console.log(juice1);

// exercise 1: personal greeting
function greetStudent(studentName) {
    return `Hello ${studentName}, welcome to JavaScript!`;
}
console.log(greetStudent("Angel"));

// exercise 2: Simple Calculator
function addNumbers(a, b) {
    return a + b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

console.log("Addition (5 + 3):", addNumbers(5, 3));
console.log("Addition (10 + 20):", addNumbers(10, 20));

console.log("Multiplication (4 * 7):", multiplyNumbers(4, 7));
console.log("Multiplication (6 * 9):", multiplyNumbers(6, 9));

// function expressions
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}
console.log(calcAge(2005));
console.log(calcAge(1994));

// parameters vs arguments
function introduce (firstName, lastName, age) {
    const introduction = `Hi! I'm ${firstName} ${lastName} and I'm ${age} years old`;
    return introduction;
}

console.log(introduce("Angel", "Fernando", "20"));

// understanding return
function yearsUntilRetirement(birthYear, firstName) {
    const age = calcAge(birthYear); // Using one function inside another!
    const retirement = 65 - age;

    if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
    } else {
    return `${firstName} has already retired!`;
    }
}

console.log(yearsUntilRetirement(2005, "Angel"));
console.log(yearsUntilRetirement(1960, "Angel"));

// function scope
// global scope
const globalVar = "I am global";

function testScope() {
const localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

testScope();
console.log(globalVar);

// coding challenge #1 - function calculator
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >=2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
    }
}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas   = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

scoreDolphins = calcAverage(85, 54, 41); // 60.0
scoreKoalas   = calcAverage(23, 34, 27); // 84.7
console.log(checkWinner(scoreDolphins, scoreKoalas));


