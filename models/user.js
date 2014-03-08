var mongoose = require('mongoose');
var _hash = require('../helpers/commonHelpers.js').hash; 

var schema = mongoose.Schema({
	name:String,
	surname:String,
	phone:String,
	email:{type:String, unique:true, index:true, lowercase:true, trim:true},
	hash:{type:String, required:true},
	salt:{type:String, required:true},
	created:{type:Date, default:Date.now()},
	token:{type:String, default:_hash(''+Date.now(), ''+Date.now()), index:true, required:true},
	cityId:{type:String}
});

schema.statics.getNewToken = function(id, callback){
	var token = _hash(conf.secret+Date.now(), ''+Date.now());
	this.findOneAndUpdate({_id:id},{token:token},function(err,count){
		if(err||count === 0) throw new Error('Cant update user token');
		if (callback) callback(null, token);
	});
}

schema.statics.dropToken = function(oldToken, callback){
	var token = _hash(conf.secret+Date.now(), ''+Date.now());
	this.findOneAndUpdate({token:oldToken},{token:token},function(err,count){
		if(err||count === 0) throw new Error('Cant drop user token');
		if (callback) callback(null, token);
	});
}

var User = mongoose.model('User',schema);

exports.User = User;