const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const { verifyToken } = require('../jwt');
const { authUser, authRole } = require('../basicAuth');


router.get('/users', verifyToken, authUser, authRole("admin"), async (req, res) => {
    console.log(req.user);
    try {
        const users = await User.find({}, { password: 0 });
        res.status(200).send(users);
    } catch {
        res.status(500).json({ message: "There was an error, try again later." });
    }
});

module.exports = router;