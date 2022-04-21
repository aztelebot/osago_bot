/**var botUtils = require('../bot/botUtils');
var debug = require('../helpers')
var messageService = require('../services/messageService');
var userService = require('../services/userService');
var addMessageHandler = require('./addMessageHandlers').someFunction;

var module  =  new addMessageHandler()

function addQuestionHandler(bot) {

  var lastMessage = module.someVar;
  var lastMessageText = lastMessage.text
    bot.onText(lastMessageText, (query) => {
        var clientInfo = botUtils.getClientInfo(query);


console.log(JSON.stringify(query));

    });

}
module.exports = addQuestionHandler **/
