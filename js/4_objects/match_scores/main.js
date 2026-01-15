// Factory function for sports matches
const createMatch = (
  firstName,
  firstPoints,
  secondName,
  secondPoints
) => {
  if (
    typeof firstName !== 'string'
    ) {
    throw new TypeError('The first team\'s name must be a string!');
  }

  if (
    typeof firstPoints !== 'object' ||
    Array.isArray(firstPoints) ||
    Object.keys(firstPoints).length === 0 ||
    Object.values(firstPoints).length === 0
    ) {
    throw new TypeError('The first team\'s points must be an non empty key-value object!');
  }

  if (typeof secondName !== 'string') {
    throw new TypeError('The second team\'s name must be a string!');
  }

  if (typeof secondPoints !== 'object' ||
      Array.isArray(secondPoints) ||
      Object.keys(secondPoints).length === 0 ||
      Object.values(secondPoints).length === 0) {
        throw new TypeError('The second team\'s points must be a non empty key-value object!');
      }

  return {
    firstName,
    firstPoints,
    secondName,
    secondPoints
  }
}

// Indian Premier League (Cricket) Final Match 2025
const match = createMatch(
  'Royal Challengers Bengaluru',

  {
    'Phil Salt': 16,
    'Virat Kohli': 43,
    'Mayank Agarwal': 24,
    'Rajat Patidar': 26,
    'Liam Livingstone': 25,
    'Jitesh Sharma': 24,
    'Romario Shepherd': 17,
    'Krunal Pandya': 4,
    'Bhuvneshwar Kumar': 1,
    'Yash Dayal': 1,
    'Josh Hazlewood': 0
  },

  'Punjab Kings',

  {
    'Priyansh Arya': 24,
    'Prabhsimran Singh': 26,
    'Josh Inglis': 39,
    'Shreyas Iyer': 1,
    'Nehal Wadhera': 15,
    'Shashank Singh':	61,
    'Marcus Stoinis':	6,
    'Azmatullah Omarzai':	1,
    'Kyle Jamieson': 0,
    'Vijaykumar Vyshak': 0,		
    'Arshdeep Singh': 0		
  }
);

// Get scores per player for Team One
const teamOneScore = Object.entries(match.firstPoints).map(
  ([player, score]) => (`${player}: ${score}`)
).join('\n');

// Get scores per player for Team Two
const teamTwoScore = Object.entries(match.secondPoints).map(
  ([player, score]) => `${player}: ${score}`
).join('\n');

// Print the final scores
console.log(`
Team One: ${match.firstName}

Score,

${teamOneScore}

Team Two: ${match.secondName}

Score,

${teamTwoScore}
`);