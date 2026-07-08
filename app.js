// import {getPosts} from "./postController.js"

// // const { generateRandomNumber, celsiusToFahrenheit } = require("./utils");

// // const randNum = generateRandomNumber();

// // console.log(`Random Number: ${generateRandomNumber()}`);
// // console.log(`Celsius to Fahrenheit: ${celsiusToFahrenheit(randNum)}`);

// console.log(getPosts())


const fs = require('fs');

console.log('1. Starting sync read...');
const data = fs.readFileSync('myfile.txt', 'utf8');
console.log('2. File contents:', data);
console.log('3. Done reading file');