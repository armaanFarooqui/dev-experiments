// Random race number
let raceNumber = Math.floor(Math.random() * 1000);

// Early registration flag
let earlyCheck = true;

// Runner age
let runnerAge = 23;

// Add 1000 for early adults
if (runnerAge > 18 && earlyCheck) {
  raceNumber += 1000;
}

// Determine race time
if (runnerAge > 18 && earlyCheck) {
  console.log(`${raceNumber}, you will have your race at 9:30 AM.`);
}
else if (runnerAge > 18 && !earlyCheck) {
  console.log(`${raceNumber}, you will have your race at 11:00 AM.`);
}
else if (runnerAge < 18) {
  console.log(`${raceNumber}, your race starts at 12:30 PM.`)
}
else {
  console.log(`${raceNumber}, check the registration desk.`)
}