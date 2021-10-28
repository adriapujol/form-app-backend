const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Admin = require('../models/Admin');
const { verifyToken } = require('../jwt');
const { authUser, authRole } = require('../basicAuth');

//GET ALL USERS
router.get('/users', verifyToken, authUser, authRole("admin"), async (req, res) => {
    console.log(req.user);
    try {
        const users = await User.find({}, { password: 0 });
        res.status(200).send(users);
    } catch {
        res.status(500).json({ message: "There was an error, try again later." });
    }
});

//CREATE USER
// in auth

//DELETE USER

router.delete('/delete/:id', verifyToken, authUser, authRole("admin"), async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).send('User Deleted');
    } catch (err) {
        res.status(500).send(`There was and error deleting the user with id: ${id}`);
    }
})


module.exports = router;