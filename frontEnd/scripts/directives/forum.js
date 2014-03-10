myApp.directive('forum', function(){
	return {
		restrict:'A',
		replace:true,
		templateUrl:"partials/forum.html",
        controller:function()
        {
            VK.init({ apiId: 4234459, onlyWidgets: true });
            VK.Widgets.Comments("vk_comments", { limit: 10, width: "520", attach: "*" });
        }
	};
});

