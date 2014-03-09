var City = require('../models/city.js').City;
var User = require('../models/user.js').User;
var async = require('async');
var isLoggedIn = require('../middleware/isLoggedIn.js');

function getCities(req, res, next){
	City.find({},function(err,cities){
		if (err) next(err);
		res.json(cities);
	})
}

function getFarmers(req, res, next){
	async.waterfall([ function(callback){
		City.findOne({cityName:res.body.cityName}, function(err,city){callback(err,city)})
	}, 
	function(city, callback){
		User.find({cityId:city._id},function(error,users){callback(error,users)})
	}
	],function(err, farmers){
		if (err) next(err);
		res.json(farmers);
	});
}

exports.add_routes = function (app) {
	app.get("/cities", getCities);

	app.get("/farmers",isLoggedIn, getFarmers);

}


