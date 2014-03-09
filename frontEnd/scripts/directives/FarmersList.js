myApp.directive('farmersList', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope : {
        	regionName:'=',
        	showProfile:'='
        }
        templateUrl: "partials/FarmersList.html",
        controller: function ($scope, $element) {

        }

    }
});