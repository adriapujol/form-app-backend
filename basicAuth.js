const authUser = (req, res, next) => {
    if (req.user == null) {
        res.status(403);
        return res.send("You need to sign in");
    }

    next();
}

const authRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            // res.status(401);
            return res.status(400).json({ error: "Not allowed" });
        }

        next();
    }
}


module.exports = { authUser, authRole }