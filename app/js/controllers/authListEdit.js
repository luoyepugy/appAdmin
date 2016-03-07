(function() {
    'use strict';


angular.module('app')
  .controller('authListEditCtrl', authListEditCtrl);

  	function authListEditCtrl(httpService, $stateParams) {
	  	var vm = this;

	  	var adminUrl = '/backend/admin',
	  		userName = $stateParams.userName;

	  	load();
	  	// 页面加载
	  	function load() {
	  		httpService.getDatas('GET', adminUrl + '/getCompletelyInfos/' + userName)
	  		.then(function(data) {
	  			vm.authListDetail = data.data;
	  		});
	  	}

  	};

})();