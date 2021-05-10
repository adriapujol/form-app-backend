const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/User');
const app = express();

const usersRouter = require('./routes/users');
const registerRouter = require('./routes/auth');

app.use(cors());
app.use(express.json());

/// DATABASE CONNECTION
mongoose.connect(process.env.DB,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, }
);

const db = mongoose.connection;
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'));


app.use('/users', usersRouter);
app.use('/user', registerRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('You are connected!');
});