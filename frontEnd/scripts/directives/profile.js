myApp.directive('profile',['API', 'auth', function (api, auth) {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            profileId: '='
        },
        templateUrl: "partials/profile.html",
        controller: function ($scope) {
            //запрос профиля по profileId
            $scope.fullName = '';
            $scope.fullAddress = '';
            $scope.shortDescription = '';
            $scope.fullDescription = '';

            var getUserInfo = function () {
                 
            }

            getUserInfo();
        }
    };
}]);

