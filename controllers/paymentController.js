var User = require('../models/user.js').User;
var async = require('async');
var isLoggedIn = require('../middleware/isLoggedIn.js');
var md5 = require('../helpers/commonHelpers.js').md5;


function getHash(req, res, next){
	console.log('paymrnt '+req.body.token);
		User.findOne({token:req.body.token},function(err,user){
			console.dir(user);
			if (err) next(err);
            var hashstr = conf.eshopid + '::' + '1000,00' + '::' + 'RUR' + '::' + user.email + '::' + user._id + '::' + user._id + '::::' + conf.rbkSecret;
            var hash = md5(hashstr);

            res.json({hash:hash,
            		shopid:conf.eshopid, 
            		email:user.email, 
            		price:1000, 
            		orderid:user._id, 
            		serviceName: user._id,//payment description
            		curency:'RUR',
            		successUrl: conf.successUrl,
            		failUrl: conf.failUrl
            	});
        })
}

exports.add_routes = function (app) {
	app.post("/payment/hash",isLoggedIn, getHash);
}


