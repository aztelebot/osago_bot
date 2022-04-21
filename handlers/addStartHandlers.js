var botUtils = require('../bot/botUtils');
var debug = require('../helpers');
var messagesService = require('../services/messageService');
var userService = require('../services/userService');

function addStartHandler(bot, messageOptions) {
    var clientMessage = new RegExp('\/start');

    bot.onText(clientMessage, (query, _) => {
        var clientInfo = botUtils.getClientInfo(query);

        if (clientInfo.firstName !== "A. T.") {
            return
        } else {

            userService.saveUser(clientInfo, (saveErr, _) => {
                if (saveErr) {
                    bot.sendMessage(clientInfo.telegramId, 'Some error! Sorry', messageOptions);
                    return;
                }

                messagesService.getByTitle('start', (getErr, message) => {
                    if (getErr != null) {
                        bot.sendMessage(clientInfo.telegramId, 'Some error! Sorry', messageOptions);
                    } else {
                        bot.sendMessage(clientInfo.telegramId, "Выберите марку автомобиля", messageOptions);
                    }
                });
            });

        }

    });

}

module.exports = addStartHandler

/**
bot.on('callback_query', function (message) {
    var clientId = message.hasOwnProperty('chat') ? message.chat.id : message.from.id;
    // То что мы записали в callback_data у кнопок приходит в message.data
    if(message.data === 'do_something'){
        bot.sendMessage(clientId, 'Button clicked!', messageOptions);
    }
});
 **/