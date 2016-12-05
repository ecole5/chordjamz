var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoticeSchema = new Schema({
    songName: String,
    content: String

});

module.exports = mongoose.model('Notice', NoticeSchema);