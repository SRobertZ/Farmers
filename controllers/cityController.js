var City = require('../models/city.js').City;

function getCities(req, res, next){
	City.find({},function(err,cities){
		if (err) next(err);
		res.json(cities);
	})
}

exports.add_routes = function (app) {
	app.get("/cities", getCities)

}
