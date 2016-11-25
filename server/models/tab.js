var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TabSchema   = new Schema({
    songName: String,
    content: String,
    userName: String,
    version: String,
    dateModified: Date,
    type: Boolean,
    copyright: Boolean
});

module.exports = mongoose.model('Tab', TabSchema);