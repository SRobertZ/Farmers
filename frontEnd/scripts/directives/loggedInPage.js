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
                { Id: 4, Name: 'Поддержка фермерства', presentationLink: 'presentations/support.html',
                    links: [
                    { Id: 5, Name: 'Актуальные материалы', presentationLink: 'presentations/materials.html' },
                    { Id: 6, Name: 'Госпрограммы поддержки', presentationLink: 'presentations/support.html' }
                 ]
                },
            ];

            $scope.unSelectTabs = function () {
                for (var x in $scope.tabs) {
                    $scope.tabs[x].selected = false;
                }
            }

            var getSelectedTab = function (id) {
                for (var x in $scope.tabs) {
                    if ($scope.tabs[x].Id === id)
                        return $scope.tabs[x];
                    for (var sx in $scope.tabs[x].links)
                        if ($scope.tabs[x].links[sx].Id === id)
                            return $scope.tabs[x].links[sx];
                }
                return null;
            }

            $scope.newSelect = function (id) {
                for (var x in $scope.tabs) {
                    $scope.tabs[x].selected = false;
                    var selectedTab = getSelectedTab(id);
                    if (selectedTab) {
                        selectedTab.selected = true;
                        $scope.user = '';
                        if (!selectedTab.presentation) {
                            var iselectedTab = selectedTab;
                            API.getPresentation(selectedTab.presentationLink).then(function (data) {
                                iselectedTab.presentation = data.data;
                                $scope.selectedTab = iselectedTab;
                            });
                        }
                        else $scope.selectedTab = selectedTab;
                    }
                };
            };

            $scope.newSelect($scope.tabs[0].Id);

            //$scope.showProfile = true;
        }
    }
} ]);