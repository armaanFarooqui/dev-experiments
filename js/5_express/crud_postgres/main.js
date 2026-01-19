// Import dependencies
const express = require('express');
const { Pool } = require('pg');

// App configuration
const port = 3000;
const app = express();

// PostgreSQL connection pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Initialise and seed database
async function initDB() {
    const sql = `
        DROP TABLE IF EXISTS users;

        CREATE TABLE USERS (
        id SERIAL PRIMARY KEY,
        username TEXT,
        password TEXT
        );

        INSERT INTO users (username, password)
        VALUES ('a', 'x'),
               ('b', 'y'),
               ('c', 'z'); 
    `;

    try {
        await pool.query(sql);
        console.log('Database reset and initialised');
    }
    catch (err) {
        console.error(err);
    }

}

initDB();

// Parse JSON request bodies
app.use(express.json());

// Log incoming requests
app.use((req, res, next) => {
    console.log(`Incoming request for ${req.method}, at ${req.url}`);
    next();
});

// User router setup
const router = express.Router();
app.use('/user', router);

// Validate and preload user by id
router.param('id', async (req, res, next, id) => {
    const numId = Number(id);

    if (!Number.isInteger(numId) || numId <= 0) {
        return res.status(400).send('Invalid user id!');
    }

    try {
        const result = await pool.query(`
            SELECT id, username, password
            FROM users
            WHERE id = $1;
            `,
            [numId]
        );

        if (result.rowCount === 0) {
            return res.status(404).send('User not found!');
        }

        req.user = result.rows[0];
        next();
    }
    catch (err) {
        next(err);
    }
});

// Create a new user
router.post('/', async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            'message': 'Username and password required!',
        });
    }

    try {
        const result = await pool.query(`
        INSERT INTO users (username, password)
        VALUES ($1, $2)
        RETURNING id, username, password;
        `,
        [username, password]
        );

        res.status(201).json({
        'message': 'User created!',
        'user': result.rows[0],
        });
    }
    catch (err) {
        next(err);
    }
});

// Get user by id
router.get('/:id', async (req, res, next) => {
    res.json({
        'message': 'User found!',
        'user': req.user,
    });
});

// Get all users
router.get('/', async (req, res, next) => {
    try {
        const result = await pool.query(`
            SELECT id, username, password
            FROM users
            `);
        const users = result.rows;

        const usernames = users.map(u => u.username);
        const filtered = users.filter(u => u.id > 2);
        const firstA = users.find(u => u.username === 'a');
        const hasB = usernames.includes('b');

        const userList = [];
        users.map(u => userList.push(String(u.username).toUpperCase()));

        res.json({
            'debug': { usernames, filtered, firstA, hasB, userList }
        });
    }
    catch (err) {
        next(err);
    }
});

// Update user fields
router.put('/:id', async (req, res, next) => {
    const numId = Number(req.params.id);
    const { username, password } = req.body;

    if (!username && !password) {
        return res.status(400).json({
            'message': 'Nothing to update!',
        });
    }

    try {
        const fields = [];
        const values = [];
        let i = 1;

        if (username) {
            fields.push(`username = $${i++}`);
            values.push(username);
        }

        if (password) {
            fields.push(`password = $${i++}`);
            values.push(password);
        }

        values.push(numId);

        const result = await pool.query(`
            UPDATE users
            SET ${fields.join(', ')}
            WHERE id = $${i}
            RETURNING id, username, password;
            `,
            values
        );

        res.json({
            'message': 'User updated!',
            'user': result.rows[0],
        });
    }
    catch (err) {
        next(err);
    }
});

// Delete user by id
router.delete('/:id', (req, res, next) => {
    const numId = Number(req.params.id);

    try{
        pool.query(`
            DELETE
            FROM users
            WHERE id = $1;
            `,
            [numId]
        );

        res.json({
            'message': 'User deleted!',
        });
    }
    catch (err) {
        next(err);
    }
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        'message': 'Internal server error!',
        'error': err.message,
    });
});

// Start HTTP server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});