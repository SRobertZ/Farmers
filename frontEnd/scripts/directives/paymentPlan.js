myApp.directive('paymentPlan', function(){
	return {
		restrict:'A',
		replace:true,
		templateUrl:"partials/paymentPlan.html",
		/*controller:function($scope,element){
			$scope.$on('$destroy', function (event) {
					$element.remove();
			});
		}*/
	};
});

