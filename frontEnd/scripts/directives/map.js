myApp.directive('map', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope:{
        	chooseRegion:'='
        },
        templateUrl: "partials/map.html",
        controller: function ($scope, $element) {

			function regSvgTooltip(el){

				function getContent(el) {
                			if($('#'+el).hasClass('area'))    var info=el+' район';
                			else                            var info='Город '+el;
                			return info;
        				}
        		var content = getContent(el);

        		 function simple_tooltip(el, name){
	 					
						var my_tooltip = $('#'+el);
						var hint = $('#tooltip');
						hint.html(content);

 						my_tooltip.mousemove(function(kmouse){
 							hint.removeAttr('style');
	 						hint.css({left:kmouse.pageX-250, top:kmouse.pageY-250});
						}).mouseout(function(){
	 						hint.css({opacity:0.8, display:"none"});
 						});
				}

				simple_tooltip(el,"tooltip");

			}

			$scope.selected = '';

			$scope.select = function(event){
				if ($scope.selected)
					angular.element(document.querySelector('#'+$scope.selected)).removeClass('highlight');
				$scope.selected = event.target.id;
				angular.element(document.querySelector('#'+$scope.selected)).addClass('highlight');
				$scope.chooseRegion($scope.selected);
			}

			$scope.hint = function(event){
				regSvgTooltip(event.target.id);
			}


        }

    }
});