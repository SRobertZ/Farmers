'use strict';

var app = angular.module('Farmers',
    [
        'directives',
        'controllers',
        'services',
        'LocalStorageModule'
    ]);

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.responseInterceptors.push('httpResponseInterceptor');
    $httpProvider.interceptors.push('httpRequestInterceptor');
} ]);


app.factory('configuration', function () {
    var config = {};
    config.url = 'http://localhost:3000/';
    return config;
});

app.factory('dataStorage', ['localStorageService', function (localStorageService) {

    var dataStorage = {};
    dataStorage.add = function (key, value) {
        localStorageService.add(key, value);
    }
    dataStorage.get = function (key) {
        return localStorageService.get(key);
    }

    dataStorage.drop = function (key) {
        dataStorage.add(key, '');
    }

    return dataStorage;
} ]);

app.factory('auth', ['dataStorage', '$rootScope', function (dataStorage,$rootScope) {

    var auth = {};

    auth.token = function(){
        return  dataStorage.get('token');
    }

    auth.unAuth = function(){
       dataStorage.drop('token'); 
       $rootScope.$broadcast("unauthorized");
    }   

    auth.auth = function(token){
       dataStorage.add('token',token); 
       $rootScope.$broadcast("authorized");
    }   

    return auth;
} ]);


app.factory('authorization', ['API', 'dataStorage', function (API,dataStorage) {
    var authorization = {};

    authorization.login = function (credentials) {
        return API.signIn(credentials);
    }

    authorization.logoff = function () {
        return API.logOut();
    }

    return authorization;
}]);

app.factory('httpResponseInterceptor',['auth', function httpInterceptor(auth,$q, $rootScope) {
    return function (promise) {
        var success = function (response) {
            return response;
        };

        var error = function (response) {
            if (response.status === 401) {
                auth.unAuth();
            }

            return $q.reject(response);
        };

        return promise.then(success, error);
    };
}]);

app.factory('httpRequestInterceptor', ['dataStorage', function (dataStorage) {
    return {
        request: function (config) {
            var token = dataStorage.get("token");
            config.headers['X-Access-Token'] = token;
            return config;
        }
    };
} ]);		