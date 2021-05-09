const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/User');
const app = express();

const usersRouter = require('./routes/users');
const registerRouter = require('./routes/register');

app.use(cors());
app.use(express.json());

/// DATABASE CONNECTION
mongoose.connect(process.env.DB,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, }
);

const db = mongoose.connection;
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'));


// app.get('/insert', async (req, res) => {
//     const user = new UserModel({
//         fname: "Jon",
//         lname: "Doe",
//         address: "Cool Street",
//         phone: "123123",
//         email: "pujols@adria.com"
//     });
//     await user.save();
//     res.send("user added");
// })


app.use('/users', usersRouter);
app.use('/register', registerRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('You are connected!');
});