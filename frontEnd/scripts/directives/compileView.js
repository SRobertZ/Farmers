myApp.directive('compile', function($compile) {
       // directive factory creates a link function
       return function(scope, element, attrs) {

         scope.$watch(
           function(scope) {
             return scope.$eval(attrs.compile);
           },
           function(value) {
		   
  			       if (scope.oldScope) {scope.oldScope.$destroy(); element.html('')}

	 		         var newScope = scope.$new(); // create a new scope from the current scope
			         scope.oldScope = newScope;
			         var content = $compile(value)(newScope); // compile and link to the new scope
			         element.append(content); // add to the DOM
	         }
         );
       };
     });
