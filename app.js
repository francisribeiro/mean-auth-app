const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const users = require('./routes/users');
const config = require('./config/database');

// MongoDB Connection
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
    console.log(`Connected to database ${config.database}`);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.error(`Database error: ${err}`);
});

const app = express();

// Port Number
const port = process.env.port || 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Routes for Users
app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid endpoint!');
});

// Start Server
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server listening on port ${port}`);
});