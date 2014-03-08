myApp.directive('compile', function($compile) {
       // directive factory creates a link function
       return function(scope, element, attrs) {
         scope.$watch(
           function(scope) {
              // watch the 'compile' expression for changes
             return scope.$eval(attrs.compile);
           },
           function(value) {
		   
		     //scope.$broadcast('$destroy');
             // when the 'compile' expression changes
             // assign it into the current DOM
             //element.html(value);
				
			 if (scope.oldScope) {scope.oldScope.$destroy(); element.html('')}
             // compile the new DOM and link it to the current
             // scope.
             // NOTE: we only compile .childNodes so that
             // we don't get into infinite loop compiling ourselves
             //$compile(element.contents())(scope);
			var newScope = scope.$new(); // create a new scope from the current scope
			scope.oldScope = newScope;
			var content = $compile(value)(newScope); // compile and link to the new scope
			element.append(content); // add to the DOM
	
			// .. then later, we want to update the content of the element ...
 
//			newScope.$destroy(); // destroy the scope and all child scopes
//			var newScope2 = scope.$new(); // create a new scope
//			var content2 = $compile(template2)(newScope2); // compile and link
//			content.replaceWith(content2); // replace the html content with the new content
			 
           }
         );
       };
     });
