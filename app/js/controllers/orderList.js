(function() {
    'use strict';


angular.module('app')
  .controller('orderListCtrl', orderListCtrl);

  	function orderListCtrl(httpService) {
	  	var vm = this;

	  	var orderUrl = '/backend/order';

	  	vm.pageChange = pageChange;
	  	vm.pagination = {
	  		maxSize: 5,
	  		bigTotalItems: 15,
	  		bigCurrentPage: 1
	  	};

	  	load();
	  	// 页面加载
	  	function load() {
	  		httpService.getDatas('GET', orderUrl + '/findOrders')
	  		.then(function(data) {
	  			vm.orderList = data.data;
	  		});
	  	}

	  	// 分页
	  	function pageChange () {
	  		console.log('page' + vm.pagination.bigCurrentPage);
	  	}

  	};

})();