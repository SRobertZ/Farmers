var mongoose = require('mongoose');
var _hash = require('../helpers/commonHelpers.js').hash; 
var newGuid = require('../helpers/commonHelpers.js').newGuid; 

var schema = mongoose.Schema({
	name:String,
	surname:String,
	phone:String,
	email:{type:String, unique:true, index:true, lowercase:true, trim:true},
	hash:{type:String, required:true},
	salt:{type:String, required:true},
	created:{type:Date, default:Date.now()},
	token:{type:String, index:true, required:true},
	cityId:{type:String, index:true},
	avatarLink:String,
	blackListed:{type:Boolean, default:false},
	shortDescription:String,
	fullDescription:String,
	mainPhotoLink:String,
	smallPhoto1Link:String,
	smallPhoto2Link:String,
	smallPhoto3Link:String,
});

schema.statics.getNewToken = function(id, callback){
	var token = newGuid();
	this.findOneAndUpdate({_id:id},{token:token},function(err,count){
		if(err||count === 0) throw new Error('Cant update user token');
		if (callback) callback(null, token);
	});
}

schema.statics.dropToken = function(oldToken, callback){
	var token = newGuid();
	this.findOneAndUpdate({token:oldToken},{token:token},function(err,count){
		console.log(count);
		if(err||count === 0) throw new Error('Cant drop user token');
		if (callback) callback(null, token);
	});
}

var User = mongoose.model('User',schema);

exports.User = User;