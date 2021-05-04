const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/User');


/// DATABASE CONNECTION
mongoose.connect(process.env.DB,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, }
);

app.get('/insert', async (req, res) => {
    const user = new UserModel({
        fname: "Jon",
        lname: "Doe",
        address: "Cool Street",
        phone: "123123",
        email: "pujols@adria.com"
    });
    await user.save();
    res.send("user added");
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('You are connected!');
});