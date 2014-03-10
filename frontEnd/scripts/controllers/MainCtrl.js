'use strict';

var myAppCtrl = angular.module('controllers', []);

myAppCtrl.controller('MainCtrl', ['$scope', 'authorization', 'dataStorage', function ($scope, authorization, dataStorage) {
    $scope.user ={};

    function setUser(token){
        if (token) $scope.user.token = token;
        else $scope.user.token = dataStorage.get("token");
    }    

    setUser();

    $scope.$on('unauthorized', function () {
        $scope.user = {};        
    })

    $scope.$on('authorized', function (event, token) {
        setUser(token);    
    })

    $scope.$on('showProfile', function (id) {
        $scope.showProfile(id);    
    })

    $scope.showProfile = function(id){
      $scope.user.id = id;  
    }

    

} ]);




