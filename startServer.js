const express        = require('express');
const https = require('https');
var http = require('http');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('koa-bodyparser');
const db             = require('./config/db');
var fs = require('fs');
//const app            = express();
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
/**const port = 8080;
var createBot = require('./bot/index.js');
var bot;
**/
/**

MongoClient.connect(db.url,
     (err, database) => {
    if (err) return console.log(err)
       var db = database.db('osago07DB');
    require('./app/routes')(app, db);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
}); **/

const SslOptions = {
    key: fs.readFileSync(__dirname + '/security/cert.key'),
    cert: fs.readFileSync(__dirname + '/security/cert.pem')
}

function startServer(bot) {
    bot = bot;


router.post('/', ctx => {
    console.log (ctx)
    const {body} = ctx.request
    console.log(body)

    bot.processUpdate(body)

    ctx.sendStatus = 200
    console.log(ctx.sendStatus)
    });
   // var app = express();
   // app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser());
    app
        .use(router.routes())
        .use(router.allowedMethods());
/**
    var config = {
        domain: 'localhost',
        http: {
            port: 8080,
        },

        https: {
            port: 8080,
            options: {
                key: fs.readFileSync(__dirname + '/security/cert.key'),
                cert: fs.readFileSync(__dirname + '/security/cert.pem')
            },
        },
    };


   let serverCallback = app.callback();
    try {
        var httpServer = http.createServer(serverCallback);
        httpServer
            .listen(config.http.port, function(err) {
                if (!!err) {
                    console.error('HTTP server FAIL: ', err, (err && err.stack));
                }
                else {
                    console.log(`HTTP  server OK: http://${config.domain}:${config.http.port}`);
                }
            });
    }
    catch (ex) {
        console.error('Failed to start HTTP server\n', ex, (ex && ex.stack));
    }
    try {
        var httpsServer = https.createServer(config.https.options, serverCallback);
        httpsServer
            .listen(config.https.port, function(err) {
                if (!!err) {
                    console.error('HTTPS server FAIL: ', err, (err && err.stack));
                }
                else {
                    console.log(`HTTPS server OK: https://${config.domain}:${config.https.port}`);
                }
            });
    }
    catch (ex) {
        console.error('Failed to start HTTPS server\n', ex, (ex && ex.stack));
    } **/
   //  app.use(bodyParser.json());
   //  app.use(bodyParser.urlencoded({ extended: true }));
   // app.set('views', path.join(__dirname, './views'));
   // app.set('view engine', 'ejs');
/**
    app.get('/', homeController);
    app.post('/globalmessage', globalMessageController);
    app.post('/privatemessage', privateMessage);
    app.post('/voting', votingController);
**/
   var port = process.env.PORT || 443;
    app.listen(port, function () {
        console.log(`Server started at ${port}`);
    });

   /** https.createServer(SslOptions, app).listen(8080, function () {
        console.log(`Server started at ${port}`);
    }); **/
}

module.exports = startServer;