var User = require('../models/user.js').User;
var isLoggedIn = require('../middleware/isLoggedIn.js');

function getUserId(req,res,next){
    console.log(req.body.token);
	User.findOne({token:req.body.token},function(err,user){
		if (err) next(err);
		if (user)
			res.json({id:user._id})
		else res.json(401,{loggedIn:false});
	});
}




exports.add_routes = function (app) {
	app.post("/user/getId",isLoggedIn, getUserId);
}


