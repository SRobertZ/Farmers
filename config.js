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
    username: 'AKIAIMQCKVVXGX4MEYHQ',
    password: 'AuEfVSZQalm5UfDFNO2YiAWP8B5npFvCxfctv6iOBLpt'
  };
  return configValues;
};
