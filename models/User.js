const mongoose = require('mongoose');

const userScheema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    numberPersons: {
        type: Number,
        required: true,
        default: 0
    },
    numberMinors: {
        type: Number,
        required: true,
        default: 0
    },
    typeFood: {
        type: String,
        required: true,
        default: 'Omnivore'
    },
    allergies: {
        type: String,
    },
    hotel: {
        type: String,
        required: true,
        default: 'no'
    },
    numberRooms: {
        type: Number,
        required: true,
        default: 0
    },
    trasport: {
        type: String,
        required: true,
        default: 'no'
    },
    childcare: {
        type: String,
        required: true,
        default: 'no'
    },
    formDone: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const UserModel = mongoose.model('user', userScheema);

module.exports = UserModel;