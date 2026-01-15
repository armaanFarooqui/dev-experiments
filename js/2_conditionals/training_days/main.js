// Generate random event
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// Return training days
const getTrainingDays = event => {
  if (event === 'Marathon') {
    return 50;
  } else if (event === 'Triathlon') {
    return 100;
  } else if (event === 'Pentathlon') {
    return 200;
  }
};

// Log event info
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

// Log training time
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// First athlete data
const event1 = getRandEvent();
const days1 = getTrainingDays(event1);
const name1 = 'Nala';

logEvent(name1, event1);
logTime(name1, days1);

// Second athlete data
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);