myApp.directive('paymentPlan', ['API', 'auth', function(API,auth){
	return {
		restrict:'A',
		replace:true,
		templateUrl:"partials/paymentPlan.html",
		controller:function($scope){

			function redirectToPaySystem(URL, PARAMS){
    			var temp = document.createElement("form");
    			temp.action = URL;
    			temp.method = "POST";
    			temp.style.display = "none";
				for (var x in PARAMS) {
        			var opt = document.createElement("input");
        			opt.name = x;
        			opt.value = PARAMS[x];
       				temp.appendChild(opt);
    			}
   				temp.appendChild(opt);
    			temp.submit();
   				return temp;
			}

			$scope.pay = function(){
				API.getHash(auth.token()).then(function(data){

	                    var PARAMS = {
						eshopid: data.data.shopid,
                        orderId: data.data.orderid,
                        serviceName: data.data.serviceName,
                        recipientAmount: data.data.price.toString() + '.00',
                        recipientCurrency: data.data.curency,
                        user_email: data.data.email,
                        successUrl: data.data.successUrl,
                        failUrl: data.data.failUrl,
                        version: 2,
                        hash: data.data.hash
                    };

                    redirectToPaySystem("https://rbkmoney.ru/acceptpurchase.aspx", PARAMS);


				});
			}

		}
	};
}]);

