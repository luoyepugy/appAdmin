(function() {
    'use strict';


angular.module('app')
  .controller('authRoleCtrl', authRoleCtrl);

  	function authRoleCtrl(httpService, messageService) {
	  	var vm = this;

	  	var roleUrl = '/backend/role';

	  	vm.pageChange = pageChange;

	  	vm.pagination = {
	  		maxSize: 5,
	  		bigTotalItems: 15,
	  		bigCurrentPage: 1
	  	};

	  	load();
	  	// 页面加载
	  	function load() {
	  		httpService.getDatas('GET', roleUrl + '/findAll')
	  		.then(function(data) {
	  			vm.authRoleList = data.data;
	  		});
	  	}

	  	// 分页
	  	function pageChange () {
	  		console.log('page' + vm.pagination.bigCurrentPage);
	  	}

  	};

})();