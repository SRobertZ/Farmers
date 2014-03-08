var _hash = require('../helpers/commonHelpers.js').hash;
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user.js').User;

module.exports = function(passport){
	passport.use(new LocalStrategy({
  			usernameField: 'email',
  			passwordField: 'password'
		}, function(username, password, done){
  			User.findOne({ email : username}, function(err,user){
  				if (err) return err;
  				if (user){
  					var hash = _hash(user.salt,password);
  					if (user.hash===hash) {
              User.getNewToken(user._id, function(err,token){
                return done(null,user); 
              });
            } else return done(null, false, { message: 'Incorrect password.' });
  				} else return done(null, false, { message: 'Incorrect username.' }) ;
 			});
		}
	));

	passport.serializeUser(function(user, done) {
		//console.log(user._id);
  		done(null, user);
	});


	passport.deserializeUser(function(user, done) {
  		User.findById(user._id, function(err,user){
    		err 
      		? done(err)
      		: done(null,user);
  		});
	});
}