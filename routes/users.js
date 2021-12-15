const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { verifyToken } = require('../jwt');
const { authUser, authRole } = require('../basicAuth');


router.get('/', verifyToken, authUser, authRole("admin"), async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        res.status(200).send(users);
    } catch {
        res.status(500).json({ message: "There was an error, try again later." });
    }
});

router.get('/:id', verifyToken, authUser, async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        res.status(200).send(user);
    } catch {
        res.status(500).json("Cannot find user");
    }
});



router.put('/form/:id', async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, {
            formAnswers: {
                fname: req.body.fname,
                lname: req.body.lname,
                address: req.body.address,
                cp: req.body.cp,
                city: req.body.city,
                phone: req.body.phone,
                email: req.body.email,
                typeFood: req.body.typeFood,
                allergies: req.body.allergies,
                plusOne: req.body.plusOne,
                children: req.body.children,
                hotel: req.body.hotel,
                numberRooms: req.body.numberRooms,
                transport: req.body.transport,
                childcare: req.body.childcare
            },
            formDone: true
        }, { useFindAndModify: false });

        res.status(200).json("Form updated");
    } catch (err) {
        res.status(500).json("There was an error, try again later.");
    }
});

router.put('/isComing/:id', async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, { isComing: req.body.isComing }, { useFindAndModify: false });
        res.status(200).json("We got it");
    } catch (err) {
        res.status(500).json("There was an error, try again later.");
    }
});



module.exports = router;