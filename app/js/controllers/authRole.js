(function() {
    'use strict';


angular.module('app')
  .controller('authRoleCtrl', authRoleCtrl);

  	function authRoleCtrl(httpService, messageService) {
	  	var vm = this;

	  	var roleUrl = '/backend/role';

	  	load();
	  	// 页面加载
	  	function load() {
	  		httpService.getDatas('GET', roleUrl + '/findAll')
	  		.then(function(data) {
	  			vm.authRoleList = data.data;
	  		});
	  	}

  	};

})();