(function() {
    'use strict';


angular.module('app')
  .controller('authListCtrl', authListCtrl);

  	function authListCtrl(httpService) {
	  	var vm = this;

	  	var adminUrl = '/backend/admin';

	  	vm.addAdmin = addAdmin;

	  	load();
	  	// 页面加载
	  	function load() {
	  		httpService.getDatas('GET', adminUrl + '/findAll')
	  		.then(function(data) {
	  			vm.authList = data.data;
	  		});
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