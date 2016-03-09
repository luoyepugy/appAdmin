(function() {
    'use strict';


angular.module('app')
  .controller('authListCtrl', authListCtrl);

  	function authListCtrl(httpService) {
	  	var vm = this;

	  	var adminUrl = '/backend/admin';
	  	
	  	// 显示分页
	  	vm.paginationShow = false;

	  	vm.pageChange = pageChange;
	  	vm.addAdmin = addAdmin;

	  	vm.pagination = {
	  		maxSize: 5,
	  		bigTotalItems: 15,
	  		bigCurrentPage: 1
	  	};

	  	load();
	  	// 页面加载
	  	function load() {
	  		httpService.getDatas('GET', adminUrl + '/findAll')
	  		.then(function(data) {
	  			vm.authList = data.data;
	  		});
	  	}

	  	// 分页
	  	function pageChange () {
	  		// console.log('page' + vm.pagination.bigCurrentPage);
	  	}

	  	// 新增管理员
	  	function addAdmin() {
	  		httpService.getDatas('GET', adminUrl + '/creat')
	  		.then(function(data) {
	  			vm.authList = data.data;
	  		});
	  	}

  	};

})();