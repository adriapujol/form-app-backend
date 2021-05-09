const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    news: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.export = mongoose.model('News', NewsSchema);