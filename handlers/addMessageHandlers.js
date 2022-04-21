var botUtils = require('../bot/botUtils');
var debug = require('../helpers')
var messageService = require('../services/messageService');
var userService = require('../services/userService');

//var MyModule = function(){};


function addMessageHandler(bot, messageOptions) {
   var sent;

  /** bot.on('inline_query', (query) => {
       const callback_query_id = query.message.message_id;
    //  const chat_id =  query.chat.id;
   const inline_message_id = query.id
        console.log (query);

//console.log(inline_message_id);
        // send a message to the chat acknowledging receipt of their message
        var clientInfo = botUtils.getClientInfo(query);
         var messageInfo = botUtils.getMessageInfo(query);
      //  console.log(messageInfo);
        console.log (query); **/
  var models = new Map([
      ["vazModels", [ {text: "Priora", callback_data: 'Priora'},{text: "Kalina", callback_data: 'Kalina'},{text: "Vesta", callback_data: 'Vesta'}]],
      ["bmwModels", [ {text: "E39", callback_data: 'E39'}, {text: "E28", callback_data: 'E28'}, {text: "E60", callback_data: 'E60'}]],
      ["audiModels",[ {text: "A4", callback_data: 'A4'}, {text: "B4", callback_data: 'B4'}, {text: "A6", callback_data: 'A6'}]]
  ])

  bot.on('callback_query', (query) => {
      console.log (query);
      bot.answerCallbackQuery(query.id, "Test", `${query.data}`)
      var clientMessage = `${query.data}`;



        clientInfo = botUtils.getClientInfo(query);
        var messageInfo = botUtils.getMessageInfo(query);
      if (query.message.text !== "Выберите модель") {
          console.log(true);
          //optionsModels = botUtils.buildMessageOptionsButtons(clientMessage);
          var optionsModels = botUtils.runCallbackButtonsModels(models, `${query.data}`);
          console.log(optionsModels);
          if (query)
          //console.log(query);
          {
              userService.saveUser(clientInfo, (saveErr, _) => {
                  if (saveErr) {
                      bot.sendMessage(clientInfo.telegramId, 'Some error! Sorry', messageOptions);
                      return;
                  }

                  messageService.saveMessage(messageInfo, (getErr, message) => {
                      console.log(message);
                      if (getErr) {
                          bot.sendMessage(chatId, 'Some error! Sorry');
                      } else {
                          // answer(args ,kwargs );

                          //  bot.answerInlineQuery(inline_message_id,optionsModels)
                          bot.editMessageText("Модель:"+`${query.data}`, {
                              chat_id: query.from.id,
                              message_id: query.message.message_id});

                         /** bot.editMessageReplyMarkup({
                              chat_id: query.from.id,
                              message_id: query.message.message_id
                          });**/

                          bot.sendMessage(clientInfo.telegramId, "Выберите модель", {reply_markup: optionsModels});

                      }


                  });
              });
          }

      } else {
          messageService.saveMessage(messageInfo, async (getErr, message) => {
              console.log(message);
              if (getErr) {
                  bot.sendMessage(chatId, 'Some error! Sorry');

              } else {

                  bot.editMessageText("Модель:"+`${query.data}`, {
                      chat_id: query.from.id,
                      message_id: query.message.message_id
                  });
                  sent = await bot.sendMessage(clientInfo.telegramId, "Введите год выпуска", {});
                  this.someVar = sent;

                  console.log(sent);

              }

      })
    }

  /**  bot.on('callback_query', (query) => {
        console.log (query);
        bot.answerCallbackQuery(query.id, "Test", `${query.data}`)
        var clientMessage = `${query.data}`;


            var clientInfo = botUtils.getClientInfo(query);
            console.log(optionsModels);
            bot.sendMessage(clientInfo.telegramId, 'Test', optionsModels);
        })
**/
    })

};






module.exports = addMessageHandler

