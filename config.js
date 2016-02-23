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
    newRegistrationEmail:"info@fermerrb.ru"
  };

  return configValues;
};

exports.getMailConfig = function () {
  configValues =  {
    host: 'email-smtp.us-west-2.amazonaws.com',
    //ses-smtp-user.20160223-234321
    username: 'AKIAJYI4AJOVUXNO2MVQ',
    password: 'Ai5edONm5UxJz49RpT3w7y59GiLD5Il/xPwBL6pqnoYV'
  };
  return configValues;
};
