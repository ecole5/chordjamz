var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TabSchema   = new Schema({
    songName: String,
    content: String
});

module.exports = mongoose.model('Tab', TabSchema);