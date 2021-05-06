const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch {
        res.status(500).json({ message: "There was an error, try again later." });
    }
});

router.post('/add', async (req, res) => {
    try {
        const newUser = new User({

            fname: req.body.fname,
            lname: req.body.lname,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            numberPersons: req.body.numberPersons,
            numberMinors: req.body.numberMinors,
            typeFood: req.body.typeFood,
            allergies: req.body.allergies,
            hotel: req.body.hotel,
            numberRooms: req.body.numberRooms,
            transport: req.body.transport,
            childcare: req.body.childcare,
            formDone: true
        });
        await newUser.save();
        // console.log("user added");
        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json({ message: "There was an error, try again later." });
    }
})



module.exports = router;