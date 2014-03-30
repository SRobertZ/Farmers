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

exports.md5 = function md5 (msg) {
    return crypto.createHash('md5').update(msg).digest("hex");
};

exports.newGuid =  function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };

            return s4() + s4() +  s4() +  s4() + 
                s4() + s4() + s4() + s4();

};

exports.sendMail = function sendMail(mailTo, mailFrom, subject, body, fn) {
    var mailOptions = {
        from: mailFrom, // sender address
        to: mailTo, // list of receivers
        subject: subject, // Subject line
        html: body // html body
    }
    smtpTransport.sendMail(mailOptions, fn); 
}


exports.hash = hash;
exports.generatePass = generatePass;