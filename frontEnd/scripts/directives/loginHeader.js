myApp.directive('loginHeader', ['API', 'authorization','auth', function (API,authorization,auth){
    return {
        restrict: 'A',
        replace: true,
        templateUrl:"partials/LoginHeader.html",
        controller:function($scope, $element){

    $scope.showLogin = function(){
        $('.login_block').toggle()
        $('.login .in').toggle()
    };


    $scope.userName = '';
    $scope.userPass = '';


    $scope.login = function () {


        var credentials = {
            email: this.userName,
            password: this.userPass
        };

        var success = function (data) {
            auth.auth(data.token);
        };

        var error = function (error) {
            auth.unAuth();
            if (error.length > 0)
                $scope.errorMessage = error;
            else
                $scope.errorMessage = 'Неверный логин или пароль.';
        };

        authorization.login(credentials).success(success).error(error);
    };            

        }
    }
}]);