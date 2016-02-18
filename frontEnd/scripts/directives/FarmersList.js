myApp.directive('farmersList', ['API',function (API) {
    return {
        restrict: 'EA',
        replace: true,
        scope : {
        	regionName:'=',
        },
        templateUrl: "partials/farmersList.html",
        controller: function ($scope, $element) {
            $scope.$watch('regionName', function(value){
                init($scope.regionName);
            });



            function init(regionName){            
                $scope.blackList = [];
                $scope.whiteList = [];
                if (regionName){
                    API.farmers(regionName).then(function(data){
                        for(var x in data.data){
                            data.data[x].fullName = data.data[x].name+' '+data.data[x].surname
                            if (!data.data[x].avatarLink) data.data[x].avatarLink = 'images/NoAvatar.jpg'
                            if(data.data[x].blackListed)
                                $scope.blackList.push(data.data[x]);    
                            else
                                $scope.whiteList.push(data.data[x]);
                        }
                    })
                }    
            }

            $scope.showProfile = function(id){
                $scope.$emit('showProfile',id);
            }

            



        }

    }
}]);