var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    title: String,
    telegramId: String,
    text: String
});

var Message = mongoose.model('message', MessageSchema);

module.exports = Message;