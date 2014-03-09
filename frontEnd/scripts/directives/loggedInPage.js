myApp.directive('loggedInPage', ['API', 'authorization','auth', function (API,authorization,auth){
    return {
        restrict: 'A',
        replace: true,
        templateUrl:"partials/LoggedInPage.html",
        scope:{
            profileId:'='
        },
        link:function($scope){
            $scope.$watch('profileId',function(value){
                if (value) $scope.unSelectTabs();
            })
        },
        controller:function($scope, $element){
            $scope.tabs = [
                {Id:1, Name:'График платежей', presentationLink:'presentations/paymentPage.html'},
                {Id:2, Name:'Карта фермеров', presentationLink:'presentations/mapPage.html'},
                {Id:3, Name:'Форум', presentationLink:'presentations/forumPage.html'},
            ];

            $scope.unSelectTabs = function(){
                for(var x in $scope.tabs){
                    $scope.tabs[x].selected = false;
                }
            }

            $scope.newSelect = function(id){
                for(var x in $scope.tabs){
                    $scope.tabs[x].selected = false;
                    if($scope.tabs[x].Id === id){
                        $scope.tabs[x].selected = true;
                        $scope.profileId = false;
                        if (!$scope.tabs[x].presentation){
                            var i = x;
                            API.getPresentation($scope.tabs[x].presentationLink).then(function(data){
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
}]);