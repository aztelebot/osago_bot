//const MongoClient    = require('mongodb').MongoClient;
const mongoose = require("mongoose");
var startServer = require('../../startServer');
var createBot = require('../../bot/index');
var fs = require('fs');
const db = require('../../config/db');

var configs = JSON.parse(fs.readFileSync('../../tsconfig.json', 'utf8'));
var config = process.env.NODE_ENV === 'production'
    ? configs.production
    : configs.development;
//var store;

//console.log (config.telegramToken);
const token = '1233160556:AAE5S3qolRAXO0u8-xFTxTXMXSYljs4Vzas';


mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex:false },
    function (err, database) {
        if (err) return console.log(err)
      /**var db = database.db('osago07DB');
        require('./index')(app, database);
        app.listen(port, () => {
            console.log('We are live on ' + port);
        });**/
    });

//store = new MongoStore({db: mongoose.connection.config.connectionString})
var bot = createBot(token, config.buttonNames);

startServer(bot);

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
});