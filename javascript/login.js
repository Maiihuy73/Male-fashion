const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Mock database user
const mockUser = {
    username: 'admin',
    password: 'password123'
};

// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    // Check if username and password are correct
    if (username !== mockUser.username || password !== mockUser.password) {
        return res.status(401).json({ message: 'Invalid username or password.' });
    }

    // Authentication successful
    return res.status(200).json({ message: 'Login successful.' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});