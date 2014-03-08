var express = require('express');
var config = require('./config.js');
var errors = require('./errorHandler.js');
var middleware = require('./middleware');
var mongoose = require('mongoose');
var routes = require('./routes.js');

//Сделали без var чтобы было доступно глобально, во всех модулях
conf = config.getSiteConfig();

var app = express();

middleware(app);
routes(app);
errors(app);

mongoose.connect('mongodb://'+conf.db.host+'/'+conf.db.db, { db: { safe: true} }, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + conf.db.db + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + conf.db.db);

        //Ready to start
        app.listen(process.env.PORT||3000);

    }
});

