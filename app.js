var express = require('express');
var config = require('./config.js');
var errors = require('./errorHandler.js');
var middleware = require('./middleware');
var mongoose = require('mongoose');
var routes = require('./routes.js');
var nodemailer = require("nodemailer");

//Сделали без var чтобы было доступно глобально, во всех модулях
conf = config.getSiteConfig();

var mailSettings = config.getMailConfig();

smtpTransport = nodemailer.createTransport("SMTP", {
        host: mailSettings.host, // hostname
        secureConnection: true, // use SSL
        port: 465, // port for secure SMTP
        auth: {
            user: mailSettings.username,
            pass: mailSettings.password
        }
});

var app = express();

console.log('Hi');

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

