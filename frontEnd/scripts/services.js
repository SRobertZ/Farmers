﻿var app = angular.module('services', []);

app.factory('API', ['$http', 'configuration', function ($http, configuration) {

    var API = {};

    API.getServerName = function () {
        return configuration.url;
    }

    API.signIn = function (credentials) {
        return $http.post(this.getServerName() + 'signIn', credentials);
    }
    API.signUp = function (credentials) {
        return $http.post(this.getServerName() + 'signUp', credentials);
    }
    API.logOut = function () {
        return $http.get(this.getServerName() + 'logout');
    }

    API.cities = function () {
        return $http.get(this.getServerName() + 'cities');
    }

    API.getPresentation = function (link) {
        return $http.get(link);
    }

    API.getUser = function (token) {
        return $http.post(this.getServerName() + 'user/getUser', {token:token});
    }

    API.farmers = function (id) {
        return $http.post(this.getServerName() + 'farmers',{cityName:id});
    }

    API.getCity= function(cityId)
    {
        return $http.post(this.getServerName() + 'city/getCity',{cityId:cityId});
    }

    API.getHash= function(token)
    {
        return $http.post(this.getServerName() + 'payment/hash',{token:token});
    }





    return API;
}]);