myApp.directive('profile', function(){
	return {
		restrict:'A',
		replace:true,
		scope:{
			profileId:'='
		},
		templateUrl:"partials/profile.html",
		controller:function($scope){
			//запрос профиля по profileId
		}
	};
});

