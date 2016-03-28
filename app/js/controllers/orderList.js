(function() {
    'use strict';


angular.module('app')
  .controller('orderListCtrl', orderListCtrl);

  	function orderListCtrl(httpService) {
	  	var vm = this;

	  	var orderUrl = '/backend/order';

	  	load();
	  	// 页面加载
	  	function load() {
	  		httpService.getDatas('GET', orderUrl + '/findOrders')
	  		.then(function(data) {
	  			vm.orderList = data.data;
	  		});
	  	}

  	};

})();