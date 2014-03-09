myApp.directive('mapPage', ['API', function (API) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: "partials/mapPage.html",
        controller: function ($scope, $element) {
        	
        	$scope.regionName='';

        	$scope.newRegionSelected = function(regionName){
        		$scope.regionName = regionName;
        	}

        }

    }
}]);