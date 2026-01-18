// Import Express and define port
const express = require('express');
const port = 3000;

// In-memory user store
const users = {
    1: {'username': 'a', 'password': 'x'},
    2: {'username': 'b', 'password': 'y'},
    3: {'username': 'c', 'password': 'z'}
};

// Create Express app
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Log all incoming requests
app.use((req, res, next) => {
    console.log(`Incoming request for ${req.method} at ${req.url}`);
    next();
});

// Create and mount user router
const router = express.Router();
app.use('/user', router);

// Validate and preload user by ID
router.param('id', (req, res, next, id) => {
    const numId = Number(id);

    if (!Number.isInteger(numId) || numId <= 0) {
        return res.status(400).send('Invalid user id!');
    }

    if (!users[numId]) {
        return res.status(404).send('User not found!');
    }

    req.user = users[numId];

    next()
});

// Create a new user
router.post('/', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            'message': 'Username and password required!',
        });
    }

    const id = Math.max(...Object.keys(users).map(Number)) + 1;
    users[id] = { username, password };

    res.status(201).json({
        'message': 'User created!',
        'id': id,
        'user': users[id],
    });
});

// Get user by ID
router.get('/:id', (req, res) => {
    res.json(req.user);
});

// Update user by ID
router.put('/:id', (req, res) => {
    const { username, password } = req.body;

    if (!username && !password) {
        return res.status(400).json({
            'message': 'Nothing to update!',
        });
    }

    if (username) {
        req.user.username = username;
    }

    if (password) {
        req.user.password = password;
    }

    res.json({
        'message': 'User updated!',
        'user': req.user,
    });
});

// Delete user by ID
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    delete users[id];

    res.json({
        'message': 'User deleted!',
    });
});

// Start HTTP server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});