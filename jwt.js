const { sign, verify } = require('jsonwebtoken');


const createToken = user => {

    const accessToken = sign({ id: user._id, username: user.username, role: user.role }, process.env.TOKEN_SECRET, {
        expiresIn: "24d"
    });

    return accessToken;
}

const verifyToken = (req, res, next) => {

    const accessToken = req.cookies["access-token"];


    if (!accessToken) return res.sendStatus(401);

    verify(accessToken, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = { createToken, verifyToken }