myApp.directive('tab', function(){
	return {
		restrict:'A',
		replace:true,
		scope:{
			newSelect:'=',
			instance:'='
		},
		templateUrl:"partials/tab.html"
	};
});

