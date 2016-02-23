var rest = require('restler');
var mongoose = require('mongoose');
var config = require('../config.js');
var City = require('../models/city.js').City;

var conf = config.getSiteConfig();

var rb = '6f2cbfd8-692a-4ee4-9b16-067210bde3fc';

mongoose.connect('mongodb://' + conf.db.host + '/' + conf.db.db, {db: {safe: true}}, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + conf.db.db + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + conf.db.db);


        rest.get('http://basicdata.ru/api/json/fias/addrobj/' + rb).on('complete', function (_data) {
            var data = _data.data;
            var num = 1;
            for (var i = data.length - 1; i >= 0; i--) {
                if (data[i].actstatus === 1 && data[i].shortname === 'р-н') {
                    console.log(num++ + ' ' + data[i].offname);
                    var city = new City({cityName: data[i].offname, cityId: data.aoguid, citytype: data[i].shortname});
                    city.save(function (err, city) {
                        if (err)  console.dir(err);
                    });


                }
            }
        })
    }
});


