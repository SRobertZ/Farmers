'use strict';

var myAppCtrl = angular.module('controllers', []);

myAppCtrl.controller('MainCtrl', ['$scope', 'authorization', 'dataStorage', function ($scope, authorization, dataStorage) {
    $scope.user ={};

    function setUser(){
        $scope.user.token = dataStorage.get("token");
    }    

    setUser();

    $scope.$on('unauthorized', function () {
        $scope.user = 0;        
    })

    $scope.$on('authorized', function () {
        setUser();    
    })

    $scope.showProfile = function(id){
      $scope.user.id = id;  
    }

    

} ]);




