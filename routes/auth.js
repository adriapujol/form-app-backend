const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { createToken, verifyToken, deleteToken } = require('../jwt');
const { authUser, authRole } = require('../basicAuth');


// Register route USERS
router.post('/register', async (req, res) => {

    if (!req.body.username || !req.body.password || !req.body.role) return res.status(500).json("Check all fields");

    const userExist = await User.findOne({ username: req.body.username });

    if (userExist) return res.status(400).json({ error: "Username already exists" });

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    try {

        const childrenArray = [
            {
                fname: "",
                lname: "",
                age: 0,
                typeFood: ""
            },
            {
                fname: "",
                lname: "",
                age: 0,
                typeFood: ""
            },
            {
                fname: "",
                lname: "",
                age: 0,
                typeFood: ""
            }, {
                fname: "",
                lname: "",
                age: 0,
                typeFood: ""
            }
        ]

        const newUser = new User({

            username: req.body.username,
            password: hashedPassword,
            role: req.body.role

        });
        newUser.formAnswers.children = childrenArray;
        const savedUser = await newUser.save();

        // const accessToken = createToken(savedUser);


        res.status(200).json({ id: savedUser._id, username: savedUser.username, role: savedUser.role });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

// Login Route USERS

router.post('/login', async (req, res) => {
    try {
        // check if username exist
        const user = await User.findOne({ username: req.body.username });

        if (!user) return res.status(400).json({ error: "Username doesn't exist" });

        // check if password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);


        if (!validPassword) {
            res.status(400).json({ error: "Incorrect password" });
        } else {

            const accessToken = createToken(user);

            // save token in cookie
            res.cookie("access-token", accessToken, {
                maxAge: 172800000,
                httpOnly: true,
                sameSite: "None",
                secure: true
            });

            const userToBeSent = user.toObject();
            delete userToBeSent.password;

            res.status(200).send(userToBeSent);
        }


    } catch (error) {
        res.status(400).json({ error: "Something went wrong" });
    }



});

// Logout USERS

router.get('/logout', deleteToken);

//get current User

router.get('/', verifyToken, authUser, async (req, res) => {
    if (!req.user) {
        return res.status(500).json({ message: "You need to log in" })
    } else {
        try {
            const user = await User.findOne({ username: req.user.username }, { password: 0 });
            res.status(200).send(user);
        } catch {
            res.status(500).json("Cannot find user");
        }
    }
});

module.exports = router;