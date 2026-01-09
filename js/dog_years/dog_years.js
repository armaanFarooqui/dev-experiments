// My human age
const myAge = 23;

// First two dog years
let earlyYears = 2;

// Convert early years to dog years
earlyYears *= 10.5;

// Human years after first two
let laterYears = myAge - 2;

// Convert later years to dog years
laterYears *= 4;

// Check values
console.log(earlyYears);
console.log(laterYears);

// Total age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// My name in lowercase
let myName = 'Armaan'.toLowerCase();

// Display final message
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);