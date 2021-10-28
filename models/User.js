const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     formAnswers: {

//         fname: {
//             type: String,
//             default: ""
//         },
//         lname: {
//             type: String,
//             default: ""
//         },
//         address: {
//             type: String,
//             default: ""
//         },
//         phone: {
//             type: String,
//             default: ""
//         },
//         email: {
//             type: String,
//             default: ""
//         },
//         numberPersons: {
//             type: Number,
//             default: 0
//         },
//         numberMinors: {
//             type: Number,
//             default: 0
//         },
//         typeFood: {
//             type: String,
//             default: 'omnivore'
//         },
//         allergies: {
//             type: String,
//             default: ""
//         },
//         hotel: {
//             type: String,
//             default: 'no'
//         },
//         numberRooms: {
//             type: Number,
//             default: 0
//         },
//         transport: {
//             type: String,
//             default: 'no'
//         },
//         childcare: {
//             type: String,
//             default: 'no'
//         },
//     },
//     formDone: {
//         type: Boolean,
//         default: false
//     },
//     unreadNews: [{ type: String }],
//     role: {
//         type: String,
//         required: true
//     }
// }, { timestamps: true });

// const childSchema = new mongoose.Schema({
// fname: {
//     type: String,
//     default: ""
// },
// lname: {
//     type: String,
//     default: ""
// },
// typeFood: {
//     type: String,
//     default: 'meat'
// },
// allergies: {
//     type: String,
//     default: ""
// }
// })

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
            default: 'not selected'
        },
        allergies: {
            type: String,
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
                default: 'not selected'
            },
            allergies: {
                type: String,
                minlength: 0,
                maxlength: 50,
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
                    default: 'not selected'
                },
                allergies: {
                    type: String,
                    minlength: 0,
                    maxlength: 50,
                    default: ""
                }
            }]
        ,
        hotel: {
            type: String,
            default: 'not answered'
        },
        transport: {
            type: String,
            default: 'not answered'
        },
        childcare: {
            type: String,
            default: 'not answered'
        }
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