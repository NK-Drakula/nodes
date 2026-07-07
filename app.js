const { generateRandomNumber, celsiusToFahrenheit } = require("./utils");

const randNum = generateRandomNumber();

console.log(`Random Number: ${generateRandomNumber()}`);
console.log(`Celsius to Fahrenheit: ${celsiusToFahrenheit(randNum)}`);
