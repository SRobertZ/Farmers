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

function getCity(req,res,next){
	console.log(req.body.cityId);
	City.findOne({_id:req.body.cityId},function(err,city){
		if (err) next(err);
		if (city){
			res.json({city:city})
		}
		else res.json(401,{loggedIn:false});
	});
}

function getFarmers(req, res, next){
	async.waterfall([ function(callback){
		City.findOne({cityName:req.body.cityName}, function(err,city){callback(err,city)})
	}, 
	function(city, callback){
		User.find({cityId:city._id},function(error,users){callback(error,users)})
	}
	],function(err, farmers){
		if (err) next(err);
		for(var x in farmers){
			farmers[x].hash = '';
			farmers[x].salt = '';
			farmers[x].created = '';
			farmers[x].token = '';
		}
		res.json(farmers);
	});
}

exports.add_routes = function (app) {
    app.post("/city/getCity", getCity);
	app.get("/cities", getCities);
	app.post("/farmers",isLoggedIn, getFarmers);
}


