var User = require('../models/user.js').User;

module.exports = function(req,res,next){
	var token = req.headers['x-access-token'];
	
	User.findOne({token:token}, function(err,user){
		if (!user||token!=user.token) return res.json(401, {errorDescription:'Login First'});
		next();	
	})
	
};