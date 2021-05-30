const express = require('express');
const router = express.Router();
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


//DELETE USER

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        if (req.body.role === "admin") {
            await User.findByIdAndDelete(id);
            res.status(200).send('User Deleted');
        } else {
            res.status(401).json("You don't have clearance to do that");
        }
    } catch (err) {
        res.status(500).send(`There was and error deleting the user with id: ${id}`);
    }
})


module.exports = router;