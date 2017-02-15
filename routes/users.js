const express = require('express');
const passport = require('passport');
const jtw = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) res.json({ success: false, msg: 'Failed to register user' });
        else res.json({ success: true, msg: 'User registered' });
    });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    res.send('Authenticate');
});

// Profile
router.get('/profile', (req, res, next) => {
    res.send('Profile');
});

// Module Exports
module.exports = router;