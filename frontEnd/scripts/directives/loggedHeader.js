myApp.directive('loggedHeader', ['API', 'authorization','auth', function (API,authorization,auth){
    return {
        restrict: 'A',
        replace: true,
        scope:{
            showProfile:'='
        },
        templateUrl:"partials/loggedHeader.html",
        controller:function($scope, $element){
            $scope.logout = function () {
                authorization.logoff();
                auth.unAuth();
            };

            function getUserId(){
                userToken = auth.token();
                API.getUser(userToken).then(function(data){
                    $scope.userId = data.data.user._id;
                    $scope.user = data.data.user;
                    if (!$scope.user.avatarLink) $scope.user.avatarLink = 'images/NoAvatar.jpg';
                    $scope.user.fullName = $scope.user.name+' '+$scope.user.surname;
                })
            }

            getUserId();

        }
    }
}]);