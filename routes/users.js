const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch {
        res.status(500).send({ message: "There was an error, try again later." });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).send(user);
    } catch {
        res.status(500).json("Cannot find user");
    }
});

router.post('/form/:id', async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, {
            formAnswers: {
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
            },
            formDone: true
        }, { useFindAndModify: false });

        res.status(200).json("Form updated");
    } catch (err) {
        res.status(500).json("There was an error, try again later.");
    }
});

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).send('User Deleted');
    } catch (err) {
        res.status(500).send(`There was and error deleting the user with id: ${id}`);
    }
})


module.exports = router;