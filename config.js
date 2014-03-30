exports.getSiteConfig = function () {
  configValues =  {
    db: {    	
        db: 'Farmers',
    	host: 'localhost'
       },
    secret: 'Farmers',
    minPassLength:10,
    eshopid: 2020011,
    rbkSecret: 'b0cf25f4e9d41a5f3adad56386ce14df',
    successUrl: "http://fermerrb.ru",
    failUrl: "http://fermerrb.ru",
    senderEmail:"noreply@fermerrb.ru",
    newRegistrationEmail:"info@fermerrb.ru",
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
