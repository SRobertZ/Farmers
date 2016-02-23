var isLoggedIn = require('../middleware/isLoggedIn.js');
var rest = require('restler');

exports.add_routes = function (app) {
    app.post("/", function (req, res) {
    	res.json(200,{status:"Ok"});
    });
	
	app.get("/", isLoggedIn, function(req, res) {
		res.header("Content-Type", "text/plain");
		res.send("Hello");
	})

};
