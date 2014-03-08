myApp.directive('loggedInPage', ['API', 'authorization','auth', function (API,authorization,auth){
    return {
        restrict: 'A',
        replace: true,
        templateUrl:"partials/LoggedInPage.html",
        controller:function($scope, $element){
            $scope.tabs = [
                {Id:1, Name:'График платежей', presentationLink:'presentations/paymentPage.html'},
                {Id:2, Name:'Карта фермеров', presentationLink:'presentations/mapPage.html'},
                {Id:3, Name:'Форум', presentationLink:'presentations/mapPage.html'},
            ];

            $scope.newSelect = function(id){
                for(var x in $scope.tabs){
                    $scope.tabs[x].selected = false;
                    if($scope.tabs[x].Id === id){
                        $scope.tabs[x].selected = true;
                        if (!$scope.tabs[x].presentation)
                            API.getPresentation($scope.tabs[x].presentationLink).then(function(data){
                                $scope.tabs[x].presentation = data.data;
                                $scope.selectedTab = $scope.tabs[x];
                            });
                        else $scope.selectedTab = $scope.tabs[x];
                    }
                };
            };

            $scope.newSelect($scope.tabs[0].Id);
        }
    }
}]);