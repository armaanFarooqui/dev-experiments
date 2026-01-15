// Source text
let input = 'lorem ipsum dolar set amet';

// Allowed vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Whale output
let resultArray = [];

// Loop input letters
for (let i = 0; i < input.length; i++) {

  // Loop vowels
  for (let j = 0; j < vowels.length; j++) {
    // Match vowels
    if (input[i] === vowels[j]) {
      // Double 'e' and 'u'
      if (input[i] === 'e' || input[i] === 'u') {
        for (let k = 0; k < 2; k++) {
          resultArray.push(input[i]);
        }
      }
      // Add once
      else {
      resultArray.push(input[i]);
      }
    }
  }
}

// Format output
const resultString = resultArray.join('').toUpperCase();

// Display results
console.log(resultString);