// Weekly sleep total
function getSleepHours(
  monday = 7.5,
  tuesday = 7.5,
  wednesday = 7.5,
  thursday = 7.5,
  friday = 7.5,
  saturday = 7.5,
  sunday = 7.5
) {
  return monday + tuesday + wednesday + thursday + friday + saturday + sunday
}

// Compare actual vs ideal sleep
function calculateSleepDebt(actualSleepHours = getSleepHours()) {
  const idealSleepHours = 7.5 * 7;
  const sleepDebt = Math.abs(idealSleepHours - actualSleepHours);

  if (actualSleepHours === idealSleepHours) {
    console.log('Congratulations! \nYou got the perfect amount of sleep.');
  }
  else if (actualSleepHours < idealSleepHours) {
    console.log(`You should get some rest! \nYou slept ${sleepDebt} hours less than the ideal sleep time.`);
  }
  else {
    console.log(`You slept more than you should have! \nYou slept ${sleepDebt} hours more than the ideal sleep time.`);
  }
}

// Weekly sleep input
const weeklyLog = getSleepHours(
  6,
  7.5,
  6,
  7.5,
  6,
  7.5,
  7.5
)

// Run sleep analysis
calculateSleepDebt(weeklyLog);