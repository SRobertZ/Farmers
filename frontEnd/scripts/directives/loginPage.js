myApp.directive('loginPage', ['API', 'authorization','auth', function (API,authorization,auth){
    return {
        restrict: 'A',
        replace: true,
        templateUrl:"partials/loginPage.html",
        controller:function($scope, $element){
            API.cities().then(function(cities){
                $scope.districts = cities.data;
                for(var x in $scope.districts){
                    $scope.districts[x].fullName = $scope.districts[x].citytype+' '+$scope.districts[x].cityName;
                }
            });

            $scope.name = '';
            $scope.surname = '';
            $scope.email = '';
            $scope.phone = '';
            $scope.district = '';

            function vilidateRegistration(value){
                //Написать проверку на валидность данных
                return true;
            }

            $scope.register = function(){
                var credentials = {
                    email: this.email,
                    password :'',
                    phone: this.phone,
                    district:this.district,
                    name:this.name,
                    surname:this.surname
                };

                var success = function (data) {
                    auth.auth(data.token);
                };

                var error = function (error) {
                    auth.unAuth();
                    if (error.length > 0)
                        $scope.errorMessage = error;
                    else
                        $scope.errorMessage = 'Возможно, вы уже зарегистрированы';
                };

                if (vilidateRegistration(credentials))
                    API.signUp(credentials).success(success).error(error);
            }


        }
    }
}]);