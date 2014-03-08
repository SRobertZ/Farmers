exports.getSiteConfig = function () {
  configValues =  {
    db: {    	
        db: 'Farmers',
    	host: 'localhost'
       },
    secret: 'Farmers',
    minPassLength:10,
  }

  return configValues;
}

exports.getMailConfig = function () {
  configValues =  {
    host: 'email-smtp.us-east-1.amazonaws.com',
    username: 'AKIAIDFZW4EZ4WEGHTKA',
    password: 'AnHWclzTKs4Q2qIJgvmtfZN2CAUBvXZaz/8R5zdkOYoH'
  }
  return configValues;
}
