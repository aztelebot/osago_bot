var messageModel = require('../models/messageModel');
var assert = require("assert");
var userService = require('./userService');


function getByTitle(title, callback) {
    messageModel.findOne({ title: title }, (err, message) => {
        if (err) {
            callback(err, null);
        }
        else  {
            callback(null, message);
        }
    });
}
function saveMessage(messageInfo, callback) {
    userService.isNew(messageInfo.telegramId, (err, result) => {
         if (err) {
            callback(err, null);
            return;
        }

        if (result) {

            callback(null, false);

        } else {
            var newMsg = new messageModel({
                telegramId: messageInfo.telegramId,
                text: messageInfo.text
            });

            newMsg.save((err) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, true);
                }
            });
        }
    })
}


module.exports = {
    getByTitle,
    saveMessage
};