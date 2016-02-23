var express = require('express');
var MongoStore = require('connect-mongo')(express);
var passport = require('passport');
var passportOptions = require('./passportOptions.js');
var cors = require('cors');

module.exports = function(app){
	app.use(express.logger());

	app.use(express.urlencoded());	
	app.use(express.json());
	app.use(express.cookieParser());

	app.use(express.session({
	    secret: conf.secret,
	    store: new MongoStore(conf.db),
	    maxAge: new Date(Date.now() + 3600000)
	}));

	app.use(passport.initialize());

	app.use(passport.session());

	passportOptions(passport);

	app.use(cors());

	app.use(function(req,res,next){
		res.locals.session = req.session;
		next();
	});
};