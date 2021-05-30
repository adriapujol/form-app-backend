const { sign, verify } = require('jsonwebtoken');


const createToken = user => {

    const accessToken = sign({ id: user._id, username: user.username, role: user.role }, process.env.TOKEN_SECRET, {
        expiresIn: "24d"
    });

    return accessToken;
}

const deleteToken = (req, res) => {
    try {
        res.clearCookie("access-token");
        res.status(200).json({ message: "logged out" });
    } catch (error) {
        res.status(400).json({ error: "Incorrect password" });
    }
}

const verifyToken = (req, res, next) => {

    const accessToken = req.cookies["access-token"];

    console.log(accessToken);

    if (!accessToken) return res.status(401).json({ error: "Not allowed" });

    verify(accessToken, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = { createToken, verifyToken, deleteToken }