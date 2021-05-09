const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/', async (req, res) => {

    console.log(req.body.username);
    console.log(req.body.password);

    if (!req.body.username || !req.body.password || !req.body.role) return res.status(500).json("Check all fields");

    try {
        const newUser = new User({

            username: req.body.username,
            password: req.body.password,
            formAnswers: {},
            formDone: false,
            unreadNews: [],
            role: req.body.role

        });
        await newUser.save();
        res.status(200).send(newUser);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;