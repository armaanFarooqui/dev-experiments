// Validate user input
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' ||
      userInput === 'paper' ||
      userInput === 'scissors'||
      userInput === 'bomb') {
        return userInput;
      }
    else {
      return false;
    }
};

// Generate a random computer choice
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return 'rock';
  }
  else if (computerChoice === 1) {
    return 'paper';
  }
  else {
    return 'scissors';
  }
}

// Determine the game outcome
function determineWinner(userChoice, computerChoice) {

  if (!userChoice) {
    return false;
  }

  if (userChoice === 'bomb') {
    return 'win';
  }

  if (userChoice === computerChoice) {
    return 'tie';
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'win';
    }
    else {
      return 'loss';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'win';
    }
    else {
      return 'loss';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'win';
    }
    else {
      return 'loss';
    }
  }
}

// Run one round of the game
function playGame(userChoice) {
  const userDecision = getUserChoice(userChoice);

  const computerChoice = getComputerChoice();

  console.log(`The user choice is: ${userDecision}`);
  console.log(`The computer choice is: ${computerChoice}`);

  const result = determineWinner(userDecision, computerChoice);

  if (result === 'win') {
    console.log('You won!');
  }
  else if (result === 'loss') {
    console.log('You lost!')
  }
  else if (result === 'tie') {
    console.log('It\'s a tie!')
  }
  else {
    console.log('Try again with a valid value!')
  }
}

// Starts the game
playGame('rock');