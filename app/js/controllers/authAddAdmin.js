(function() {
    'use strict';


angular.module('app')
  .controller('authAddAdminCtrl', authAddAdminCtrl);

  	function authAddAdminCtrl(httpService) {
	  	var vm = this;

	  	var adminUrl = '/backend/admin';

	  	vm.addAdmin = addAdmin;

	  	// 新增管理员
	  	function addAdmin() {
	  		httpService.getDatas('GET', adminUrl + '/creat')
	  		.then(function(data) {
	  			vm.authList = data.data;
	  		});
	  	}

  	};

})();