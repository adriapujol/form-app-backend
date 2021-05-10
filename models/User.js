const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    formAnswers: {

        fname: {
            type: String,
            default: ""
        },
        lname: {
            type: String,
            default: ""
        },
        address: {
            type: String,
            default: ""
        },
        phone: {
            type: String,
            default: ""
        },
        email: {
            type: String,
            default: ""
        },
        numberPersons: {
            type: Number,
            default: 0
        },
        numberMinors: {
            type: Number,
            default: 0
        },
        typeFood: {
            type: String,
            default: 'Omnivore'
        },
        allergies: {
            type: String,
            default: ""
        },
        hotel: {
            type: String,
            default: 'no'
        },
        numberRooms: {
            type: Number,
            default: 0
        },
        transport: {
            type: String,
            default: 'no'
        },
        childcare: {
            type: String,
            default: 'no'
        },
    },
    formDone: {
        type: Boolean,
        default: false
    },
    unreadNews: [{ type: String }],
    role: {
        type: String,
        required: true
    }
}, { timestamps: true });

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;