var crypto = require('crypto');

String.prototype.randomString = function (stringLength) {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    if (!stringLength > 0) {
        var stringLength = 8;
    }
    var randomString = '';
    for (var i = 0; i < stringLength; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomString += chars.substring(rnum, rnum + 1);
    }
    return randomString;
}


function hash(key,value){
	return crypto.createHmac('sha256', key).update(value).digest('hex');
}

function generatePass(length){
	return ''.randomString(length);
}


exports.hash = hash;
exports.generatePass = generatePass;