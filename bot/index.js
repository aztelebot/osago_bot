process.env.NTBA_FIX_319 = 1;
process.env.PROXY_SOCKS5_HOST = '127.0.0.1';
process.env.PROXY_SOCKS5_PORT = '9050';



const TelegramBot = require('node-telegram-bot-api');
var Agent = require('socks5-https-client/lib/Agent');
var ip = require('ip');
const debug = require('../helpers');
var botUtils = require('./botUtils');
var addStartHandler = require('../handlers/addStartHandlers');
var addMessageHandler = require('../handlers/addMessageHandlers');
var addQuestionHandler = require('../handlers/addQuestionHandlers');
var EventHandler = require('../handlers/EventHandler')
var fs = require('fs');
const ngrok = require('ngrok');


/**
var configs = JSON.parse(fs.readFileSync('../../tsconfig.json', 'utf8'));
var config = process.env.NODE_ENV === 'production'
    ? configs.production
    : configs.development;
**/
/**
 const SslOptions = {
    key: fs.readFileSync(__dirname + '/../security/cert.key'),
    cert: fs.readFileSync(__dirname + '/../security/cert.pem')
}
**/


const HOST = ip.toBuffer(process.env.PROXY_SOCKS5_HOST);
const PORT = parseInt(process.env.PROXY_SOCKS5_PORT);
//const HOST = '127.0.0.1';
//const PORT = '443';

let DOMAIN = ' https://3901-188-170-194-121.ngrok.io';


const token = '1233160556:AAE5S3qolRAXO0u8-xFTxTXMXSYljs4Vzas';



const fileOptions = {
    filepath: __dirname + '/../security/cert.pem',
    content_type: 'application/x-pem-file'
}
// Create a bot that uses 'polling' to fetch new updates
function createBot(token, buttonNames) {

        const bot = new TelegramBot(token, /**{
                webHook: {
                    host: HOST,
                    port: PORT
                },
            request: {
                agentClass: Agent,
                agentOptions: {
                    socksHost: HOST,
                    socksPort: PORT
                }
            }, function(err, res) {
                console.log(err || res.body);
            }
        });**/


            /**{
            webHook: {
                host: HOST,
                port: PORT
            }
            , onlyFirstMatch: true
        });**/
        // bot.setWebHook(DOMAIN + ':443/bot' + token)


            //    bot.setWebHook(DOMAIN + ':443', {certificate: fileOptions});

          {
            polling: true,
            request: {
                agentClass: Agent,
                agentOptions: {
                    socksHost: HOST,
                    socksPort: PORT
                }
            }, function(err, res) {
                console.log(err || res.body);
            }
        });
               bot.on("polling_error", (m) => console.log(m));


        var vazModels = [{text: "Priora", callback_data: 'Priora'}, {
                text: "Kalina",
                callback_data: 'Kalina'
            }, {text: "Vesta", callback_data: 'Vesta'}];


        var models = new Map([
            ["vazModels", [{text: "Priora", callback_data: 'Priora'}, {
                text: "Kalina",
                callback_data: 'Kalina'
            }, {text: "Vesta", callback_data: 'Vesta'}]],
            ["bmwModels", [{text: "E39", callback_data: 'E39'}, {text: "E28", callback_data: 'E28'}, {
                text: "E60",
                callback_data: 'E60'
            }]],
            ["audiModels", [{text: "A4", callback_data: 'A4'}, {text: "B4", callback_data: 'B4'}, {
                text: "A6",
                callback_data: 'A6'
            }]]
        ])


        // var optionsModels =  runCallbackButtonsModels(models, "vazModels")
        // console.log(optionsModels);

        var options = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{text: "VAZ", callback_data: "vazModels"}],
                    [{text: "BMW", callback_data: "bmwModels"}],
                    [{text: "AUDI", callback_data: "audiModels"}]
                ]
            })
        }

        /**  var optionsVaz = {

            inline_keyboard: [
                    [ {text: "Priora", callback_data: 'Priora'},{text: "Kalina", callback_data: 'Kalina'},{text: "Vesta", callback_data: 'Vesta'}]
            ]

    }**/

            // var optionsModels = botUtils.createAutoList(vazModels);
            // console.log(optionsModels);
            //  var optionsModels = optionsVaz;


        var messageOptions = options;
        //someModule = new addMessageHandler();

        addStartHandler(bot, messageOptions);
        addMessageHandler(bot, messageOptions)
      //  someModule(bot, messageOptions);
       //  module.exports = addMessageHandler.prototype.someFunction();

      //  addQuestionHandler(bot);


        return bot;
    }



//createBot(token, config.buttonNames);

module.exports = createBot



/**const inline_keyboard = [
    [
        {
        text: 'forward',
        callback_data: 'forward'
        }
    ],
    [
        {
        text: 'Reply',
        callback_data: 'reply'
    }
    ],
    [
        {
         text: 'Edit',
         callback_data: 'edit'
        }
    ],
        [
        {
            text: 'Delete',
            callback_data: 'delete'
        }
        ]
]

bot.on('callback_query', query => {
    const {chat, message_id, text} = query.message
    switch (query.data) {
        case 'forward':
            bot.forwardMessage(chat.id, chat.id, message_id)
            break
    }

    bot.answerCallbackQuery(query.id);


})

bot.onText(/\/start/, (msg, [source, match]) =>
{


    const chatId = msg.chat.id;
    // const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, 'Keyboard', {
        reply_markup: {
            inline_keyboard
        }
    })

})


bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, debug(msg));
});
**/