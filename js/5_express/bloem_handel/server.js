// App greeting
console.log('\nWelkom bij Enschede Bloemhandel!');

// Imports
const express = require('express');
const readline = require('readline/promises');
const path = require('path');

// Create express app and port
const app = express();
const port = 3000;

// Readline setup
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Serve public
app.use(express.static(path.join(__dirname, 'public')));

// Main application logic
async function main() {
    // Flower choice
    let choice;

    // Prompt until valid
    while (choice === undefined) {

        const input = await rl.question('\nChoose a flower. \n1.Tulips \n2.Roses \n3.Daffodils \n\nYour choice: ');
        const parsed = parseInt(input, 10);

        if ([1, 2, 3].includes(parsed)) {
            choice = parsed;
        }
        else {
            console.error('\nInvalid input! Enter 1, 2, or 3.');
        }

    }

    // Route for flower
    app.get('/flower/:id', (req, res) => {
        const id = parseInt(req.params.id);

        if ([1, 2, 3].includes(id)) {
            res.sendFile(path.join(__dirname, 'views', 'index.html'));
        }
        else {
            res.status(404).send('Flower not found!');
        }
    });

    // Start server
    app.listen(port, () => {
        console.log(`Open your browser at http://localhost:${port}/flower/${choice}`);
    });

    // Close terminal input
    rl.close();
}

main();