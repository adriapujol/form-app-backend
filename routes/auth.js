const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register route
router.post('/register', async (req, res) => {

    if (!req.body.username || !req.body.password || !req.body.role) return res.status(500).json("Check all fields");

    const userExist = await User.findOne({ username: req.body.username });

    if (userExist) return res.status(400).json({ error: "Username already exists" });

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    try {
        const newUser = new User({

            username: req.body.username,
            password: hashedPassword,
            formAnswers: {},
            formDone: false,
            unreadNews: [],
            role: req.body.role

        });
        const savedUser = await newUser.save();
        res.status(200).json({ userId: savedUser._id, username: savedUser.username });
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Login Route

router.post('/login', async (req, res) => {

    try {
        // check if username exist
        const user = await User.findOne({ username: req.body.username });

        if (!user) return res.status(400).json({ error: "Username doesn't exist" });

        // check if password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword) return res.status(400).json({ error: "Incorrect password" });

        res.status(200).json({ id: user._id, username: user.username });

    } catch (error) {
        res.status(400).json({ error: "Cannot login" });
    }



});

module.exports = router;