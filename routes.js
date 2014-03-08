var commonHelper = require('./controllers/CommonController.js');
var authHelper = require('./controllers/autentificationController.js');
var cityHelper = require('./controllers/cityController.js');

module.exports = function (app) {
    commonHelper.add_routes(app);
    authHelper.add_routes(app);
    cityHelper.add_routes(app);
};