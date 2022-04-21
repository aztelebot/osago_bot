
function getClientInfo(message) {
    return {
        firstName: message.from.first_name,
        lastName: message.from.last_name,
        telegramId: message.hasOwnProperty('chat') ? message.chat.id : message.from.id
    };
}

function getMessageInfo(message) {
    return {
        telegramId: message.hasOwnProperty('chat') ? message.chat.id : message.from.id,
        text: message.hasOwnProperty ('data') ? message.data : message.text
    }
}

function getLastMessageText(message) {
    return message.text;
}

function buildDefaultButton(text, callback_data) {
    return [{
        text: text,
        callback_data: callback_data,

    }]
}
function buildUrlButton(text, url) {
    return [{
        text: text,
        url: url
    }]
}

function buildShareButton(text, shareUrl) {
    return [{
        text: text,
        url: 'https://telegram.me/share/url?url=' + shareUrl
    }]
}

function buildMessageOptions(buttons) {
    return {
        parse_mode: "HTML",
        disable_web_page_preview: false,
        reply_markup: JSON.stringify({
            inline_keyboard: buttons
        })
    }
}

function createAutoListInlineKeyboardMarkup (models) {

     return {
        parse_mode: "HTML",
        disable_web_page_preview: false,
        reply_markup: JSON.stringify({
            inline_keyboard: models.map(function (model) {
                return [{
                    text: model.text,
                    callback_data: model.callback_data
                }];
            })
        })
    }
}

function createAutoList (models) {

    return {
        parse_mode: "HTML",
        disable_web_page_preview: false,
        inline_keyboard: models.map(function (model) {
                return [{
                    text: model.text,
                    callback_data: model.callback_data
                }];
            })

    }
}
/**
function runCallbackButtonsModels(models) {
    var obj = {};
    var arr = [];

    obj = createAutoList(models);
   // obj2 = obj.reply_markup;
    // console.log(obj2);

    return obj;
}
**/
function runCallbackButtonsModels(models, keys) {
    let car = [];
    var model;
    for (let key of models.keys()) {
        if (key === keys) {

            model = models.get(key);
            console.log(model);
        }
    }
    var obj = createAutoList(model)
    //console.log (obj);
    return obj;
}

function buildMessageOptionsButtons(autos) {
    return {
        parse_mode: "HTML",
        disable_web_page_preview: false,
        reply_markup: runCallbackButtonsModels(autos)

    }
}

function buildMessageOptionsText(message) {
    return {
        message: JSON.stringify(message)
    }
}
module.exports = {
    getClientInfo,
    getMessageInfo,
    getLastMessageText,
    buildDefaultButton,
    runCallbackButtonsModels,
    createAutoListInlineKeyboardMarkup,
    createAutoList,
    buildMessageOptionsButtons,
    buildUrlButton,
    buildShareButton,
    buildMessageOptions,
};