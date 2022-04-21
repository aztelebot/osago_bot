var buttons = [
    botUtils.buildDefaultButton("Priora", 'Priora'),
    botUtils.buildDefaultButton("Kalina", 'Kalina'),
    botUtils.buildDefaultButton("Vesta", 'Vesta'),
    //  botUtils.buildShareButton(buttonNames.shareText, buttonNames.shareUrl),
    //  botUtils.buildUrlButton(buttonNames.linkText, buttonNames.linkUrl)
];
/**
 var models = new Map([
 ['VAZ', botUtils.buildDefaultButton("Priora",{vazModels})],
 ['BMW', botUtils.buildDefaultButton("BMW", {bmwModels})],
 ['AUDI', botUtils.buildDefaultButton("AUDI", {audiModels})]
 ]);**/

/**
 var models = new Map([
 ["vazModels", [ {text: "Priora", callback_data: 'Priora'},{text: "Kalina", callback_data: 'Kalina'},{text: "Vesta", callback_data: 'Vesta'}]],
 ["bmwModels", [{text: "E39", callback_data: 'E39'}, {text: "E28", callback_data: 'E28'}, {text: "E60", callback_data: 'E60'}]],
 ["audiModels",[{text: "A4", callback_data: 'A4'}, {text: "B4", callback_data: 'B4'}, {text: "A6", callback_data: 'A6'}]]
 ]);**/



/**
 var vazModels = [
 {text: "Priora", callback_data: 'Priora'},
 {text: "Kalina", callback_data: 'Kalina'},
 {text: "Vesta", callback_data: 'Vesta'}
 ];
 var bmwModels = [
 [{text: "E39", callback_data: 'E39'}],
 [{text: "E28", callback_data: 'E28'}],
 [{text: "E60", callback_data: 'E60'}]
 ];
 var audiModels = [
 [{text: "A4", callback_data: 'A4'}],
 [{text: "B4", callback_data: 'B4'}],
 [{text: "A6", callback_data: 'A6'}]
 ]; **/



/**  var autos =
 [
 botUtils.buildDefaultButton("VAZ", `${vazModels}`),
 botUtils.buildDefaultButton("BMW", `${bmwModels}`),
 botUtils.buildDefaultButton("AUDI", `${audiModels}`),
 ]; **/
/**
 var machines = new Map([
 ["VAZ", botUtils.buildDefaultButton("VAZ", `${vazModels}`)],
 ["BMW", botUtils.buildDefaultButton("BMW", `${bmwModels}`)],
 ["AUDI",botUtils.buildDefaultButton("BMW", `${audiModels}`)]
 ]);
 **/
var autos =  new Map ([
    [ "VAZ", [{text: "VAZ", callback_data: "vazModels"}]],
    [ "BMW", [{text: "BMW", callback_data: "bmwModels"}]],
    [ "AUDI", [{text: "AUDI", callback_data: "audiModels"}]],
]);
/**
 function runCallbackButtonsModels(models, keys) {
     let car = [];
       var model;
       for (let key of models.keys()) {

           if (key === keys) {

               model = models.get(key);
           }
       }
//console.log(model);
var j =0;
                 model.forEach(function(item, i, arr) {

                        car[j] = Object.entries(item);
                       j =j+1;

                    });

    // console.log (car);
      // j=0;


     let obj = {};

     car.forEach((el) => {
         Object.assign(obj, el);

     });
     for (var i=0; i<car.length; i++) {
     car[i] = obj.value;
     console.log(obj);
 }
    //  for (j = 0; j < 2; j++) {

 // console.log(car)
    //car.push = botUtils.createAutoListInlineKeyboardMarkup(model[i]);
       // return car;
 **/
/**
 function runCallbackButtonsModels(models) {
    var obj = {};
    var arr = [];

    obj = botUtils.createAutoListInlineKeyboardMarkup(models);
    obj2 = obj.reply_markup;
   // console.log(obj2);

    return obj2;
}
 **/
// for(var i=0; i < Object.values (obj.reply_markup.inline_keyboard.length; i++) {
//    arr[i] = obj.reply_markup.inline_keyboard[i]
//  }
//console.log (arr);





/** function runCallbackButtonsCars(cars, key) {

        var car = cars.filter(function(keys) {
            return keys === key;
        });
        car.forEach((value, key, map) => {

            botUtils.createAutoListInlineKeyboardMarkup(value);

    })
    return
}**/
//   var key = "VAZ"

//  console.log(runCallbackButtonsModels(vazModels));

/**   function runCallbackButtons(models) {
        // var cars = new Array();
        //  for (let i =0; i < models.length; i++)
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
 **/



/**
 var options = {
           reply_markup: JSON.stringify({
               inline_keyboard: [
                   [{text: "VAZ", callback_data: runCallbackButtons(vazModels)}],
                   [{text: "BMW", callback_data: runCallbackButtons (bmwModels)}],
                   [{text: "AUDI", callback_data: runCallbackButtons(audiModels)}]
               ]
            })
        }
 **/