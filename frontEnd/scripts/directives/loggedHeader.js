myApp.directive('loggedHeader', ['API', 'authorization','auth', function (API,authorization,auth){
    return {
        restrict: 'A',
        replace: true,
        templateUrl:"partials/LoggedHeader.html",
        controller:function($scope, $element){
            $scope.logout = function () {
                authorization.logoff();
                auth.unAuth();
            };
        }
    }
}]);