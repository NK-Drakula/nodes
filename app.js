// // // import {getPosts} from "./postController.js"

// // // // const { generateRandomNumber, celsiusToFahrenheit } = require("./utils");

// // // // const randNum = generateRandomNumber();

// // // // console.log(`Random Number: ${generateRandomNumber()}`);
// // // // console.log(`Celsius to Fahrenheit: ${celsiusToFahrenheit(randNum)}`);

// // // console.log(getPosts())


// // const fs = require('fs');

// // console.log('1. Starting sync read...');
// // const data = fs.readFileSync('myfile.txt', 'utf8');
// // console.log('2. File contents:', data);
// // console.log('3. Done reading file');


// const fs = require('fs');

// console.log('1. Starting async read...');
// fs.readFile('myfile.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log('2. File contents:', data);
// });

// console.log('3. Done starting read operation');