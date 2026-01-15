// Starting message
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Remove last word
secretMessage.pop();

// Add words to end
secretMessage.push('to', 'Program');

// Replace "easily"
secretMessage[7] = 'right';

// Remove first word
secretMessage.shift();

// Add word to start
secretMessage.unshift('Programming');

// Replace multiple words
secretMessage.splice(6, 5, 'know');

// Print sentence
console.log(secretMessage.join(' '));