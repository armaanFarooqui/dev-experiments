// App greeting
console.log('\nWelcome to the Score Recorder App!')

// Imports
const readline = require('readline/promises');
const fs = require('fs/promises');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Main application logic
async function main() {
    // Number of players
    let limit;

    // Prompt until valid team size
    while (limit === undefined) {
        const input = await rl.question('\nHow many members are there in this team? ');
        const parsed = parseInt(input, 10);

        if (!Number.isNaN(parsed) && parsed > 0) {
            limit = parsed;
        }
        else {
            console.log('Enter a valid integer!');
        }

    }

    console.log(`\nNow enter the scores recorded for each of the ${limit} players`);

    // Store player scores
    let record = {};

    // Collect player data
    for (let i = 0; i < limit; i++) {
        let player, points;

        // Get valid player name
        while (player === undefined) {
            const input = await rl.question(`\nEnter player ${i+1} name: `);
            const trimmed = input.trim().replace(/[,'"]/g, '');

            if (trimmed.length > 0) {
                player = trimmed;

            }
            else {
                console.log('Player name cannot be empty!');
            }
        }

        // Get valid score
        while (points === undefined) {
            const input = await rl.question(`Enter player ${i+1} score: `);
            const parsed = parseInt(input, 10);

            if (!Number.isNaN(parsed) && parsed >= 0) {
                points = parsed;
            }
            else {
                console.log('Enter a valid integer!');
            }
        }
        
        // Save score
        record[player] = points;
        console.log(`Recorded: Score for ${player}: ${points}`);

    }

    console.log('\nFinal scores recorded: ');

    // Print scores to console
    const members = Object.keys(record);
    for (let i = 0; i < members.length; i++) {
        console.log(`${members[i]}: ${record[members[i]]}`);
    }

    // Write CSV file
    const lines = ['player,score'];
    for (const name of members) {
        lines.push(`${name},${record[name]}`);
    }

    await fs.writeFile('output.csv', lines.join('\n'), 'utf-8');

    // Close readline
    rl.close();

}

// Start program
main();