var mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name can\'t be blank!'
    },
    tag: {
        type: String,
        required: 'Give it a tag for better search results!'
    },
    image: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

var Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;