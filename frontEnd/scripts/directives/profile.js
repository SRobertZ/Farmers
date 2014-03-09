myApp.directive('profile', ['API', 'auth', function (API, auth) {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            profileId: '='
        },
        templateUrl: "partials/profile.html",
        controller: function ($scope) {
            //запрос профиля по profileId
            $scope.fullAddress = '';
            $scope.shortDescription = '';
            $scope.fullDescription = '';



            var getFullAddress = function (cityId) {
                API.getCity(cityId).then(function (data) {
                    var city = data.data.city;
                    $scope.fullAddress = 'Республика Башкортостан, ' + city.citytype + ' ' + city.cityName;
                })
            }

            var getUserInfo = function () {
                userToken = auth.token();
                API.getUser(userToken).then(function (data) {
                    $scope.userId = data.data.user._id;
                    $scope.user = data.data.user;
                    $scope.shortDescription = data.data.user.shortDescription;
                    $scope.fullDescription = data.data.user.fullDescription;
                    if (!$scope.user.avatarLink) $scope.user.avatarLink = 'images/NoAvatar.jpg';
                    $scope.user.fullName = $scope.user.name + ' ' + $scope.user.surname;
                    getFullAddress(data.data.user.cityId);
                })
            }

            getUserInfo();
        }
    };
} ]);

