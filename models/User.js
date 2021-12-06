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
    isComing: {
        type: Boolean
    },
    formAnswers: {

        fname: {
            type: String,
            default: "",
            minlength: 0,
            maxlength: 20
        },
        lname: {
            type: String,
            minlength: 0,
            maxlength: 20,
            default: ""
        },
        address: {
            type: String,
            minlength: 0,
            maxlength: 50,
            default: ""
        },
        cp: {
            type: String,
            minlength: 0,
            maxlength: 20,
            default: ""
        },
        city: {
            type: String,
            minlength: 0,
            maxlength: 20,
            default: ""
        },
        phone: {
            type: String,
            minlength: 0,
            maxlength: 50,
            default: ""
        },
        email: {
            type: String,
            minlength: 0,
            maxlength: 50,
            default: ""
        },
        typeFood: {
            type: String,
            minlength: 0,
            maxlength: 150,
            default: ""
        },
        plusOne: {
            fname: {
                type: String,
                minlength: 0,
                maxlength: 20,
                default: ""
            },
            lname: {
                type: String,
                minlength: 0,
                maxlength: 20,
                default: ""
            },
            typeFood: {
                type: String,
                minlength: 0,
                maxlength: 150,
                default: ""
            }

        },
        children:
            [{
                fname: {
                    type: String,
                    minlength: 0,
                    maxlength: 20,
                    default: ""
                },
                lname: {
                    type: String,
                    minlength: 0,
                    maxlength: 20,
                    default: ""
                },
                age: {
                    type: Number,
                    minlength: 0,
                    maxlength: 20,
                    default: 0
                },
                typeFood: {
                    type: String,
                    minlength: 0,
                    maxlength: 150,
                    default: ""
                }
            }]
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