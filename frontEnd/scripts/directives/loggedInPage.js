myApp.directive('loggedInPage', ['API', 'authorization', 'auth', function (API, authorization, auth) {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "partials/LoggedInPage.html",
        scope: {
            user: '='
        },
        controller: function ($scope, $element) {

            var getDate = function () {
                var s;
                var t = new Date();
                var y = t.getFullYear();
                var d = t.getDate();
                var mon = t.getMonth();
                switch (mon) {
                    case 0: s = "января"; break;
                    case 1: s = "февраля"; break;
                    case 2: s = "марта"; break;
                    case 3: s = "апреля"; break;
                    case 4: s = "мае"; break;
                    case 5: s = "июня"; break;
                    case 6: s = "июля"; break;
                    case 7: s = "августа"; break;
                    case 8: s = "сентября"; break;
                    case 9: s = "октября"; break;
                    case 10: s = "ноября"; break;
                    case 11: s = "декабря"; break;
                }
                return d + " " + s + " " + y;

            }

            $scope.currentDate = getDate();

            $scope.$watch('user', function (value) {
                if (value) $scope.unSelectTabs();
            })

            $scope.tabs = [
                { Id: 1, Name: 'График платежей', presentationLink: 'presentations/paymentPage.html' },
                { Id: 2, Name: 'Карта фермеров', presentationLink: 'presentations/mapPage.html' },
                { Id: 3, Name: 'Новости', presentationLink: 'presentations/forumPage.html' },
            ];

            $scope.unSelectTabs = function () {
                for (var x in $scope.tabs) {
                    $scope.tabs[x].selected = false;
                }
            }

            $scope.newSelect = function (id) {
                for (var x in $scope.tabs) {
                    $scope.tabs[x].selected = false;
                    if ($scope.tabs[x].Id === id) {
                        $scope.tabs[x].selected = true;
                        $scope.user = '';
                        if (!$scope.tabs[x].presentation) {
                            var i = x;
                            API.getPresentation($scope.tabs[x].presentationLink).then(function (data) {
                                $scope.tabs[i].presentation = data.data;
                                $scope.selectedTab = $scope.tabs[i];
                            });
                        }
                        else $scope.selectedTab = $scope.tabs[x];
                    }
                };
            };

            $scope.newSelect($scope.tabs[0].Id);

            //$scope.showProfile = true;
        }
    }
} ]);