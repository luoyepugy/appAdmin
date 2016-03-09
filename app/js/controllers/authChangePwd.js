(function() {
    'use strict';


angular.module('app')
  .controller('authChangePwdCtrl', authChangePwdCtrl);

  	function authChangePwdCtrl($stateParams) {
	  	var vm = this;

	  	// 修改密码的用户名
	  	vm.userName = $stateParams.userName;
  	};

})();