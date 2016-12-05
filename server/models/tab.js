var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TabSchema = new Schema({
    songName: String,
    content: String,
    userName: String,
    type: Boolean,
    copyright: Boolean,
    valid: Boolean,
    version: Number
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Tab', TabSchema);