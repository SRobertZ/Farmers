'use strict';

var myAppCtrl = angular.module('controllers', []);

myAppCtrl.controller('MainCtrl', ['$scope', 'authorization', 'dataStorage', function ($scope, authorization, dataStorage) {
    
    function setUser(){
        $scope.user = dataStorage.get("token");
    }    

    setUser();

    $scope.$on('unauthorized', function () {
        $scope.user = 0;        
    })

    $scope.$on('authorized', function () {
        setUser();    
    })

} ]);




