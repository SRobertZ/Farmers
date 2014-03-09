myApp.directive('loggedHeader', ['API', 'authorization', 'auth', function (API, authorization, auth) {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            showProfile: '='
        },
        templateUrl: "partials/LoggedHeader.html",
        controller: function ($scope, $element) {
            $scope.logout = function () {
                authorization.logoff();
                auth.unAuth();
            };

            function getUserId() {
                userToken = auth.token();
                API.getUserId(userToken).then(function (data) {
                    debugger;
                    $scope.userId = data.data.id;
                })
            }

            getUserId();

        }
    }
} ]);