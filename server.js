const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
// const UserModel = require('./models/User');
const app = express();


// Routes
const usersRouter = require('./routes/users');
const registerRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
// app.use(expressValidator());

/// DATABASE CONNECTION
mongoose.connect(process.env.DB,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, }
);

const db = mongoose.connection;
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'));


app.use('/users', usersRouter);
app.use('/user', registerRouter);
app.use('/admin', adminRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('You are connected!');
});