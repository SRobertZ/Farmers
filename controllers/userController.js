var User = require('../models/user.js').User;
var isLoggedIn = require('../middleware/isLoggedIn.js');

function getUser(req,res,next){
	console.log(req.body.token);
	User.findOne({token:req.body.token},function(err,user){
		if (err) next(err);
		if (user){
			user.hash='';
			user.salt='';
			user.token='';
			user.created='';
			res.json({user:user})
		}
		else res.json(401,{loggedIn:false});
	});
}


exports.add_routes = function (app) {
	app.post("/user/getUser",isLoggedIn, getUser);
}


