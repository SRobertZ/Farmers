var mongoose = require('mongoose');

var schema = mongoose.Schema({
	cityName:{type:String,index:true},
	citytype:String
});

var City = mongoose.model('City',schema);

exports.City = City;