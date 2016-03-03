(function() {
    'use strict';

/**
 * @ngdoc function
 * @name appAdminApp.controller:signinCtrl
 * @description
 * # signinCtrl
 * Controller of the appAdminApp
 */
angular.module('app')
  .controller('vipListCtrl', vipListCtrl);

  	function vipListCtrl(httpService) {
	  	var vm = this;

	  	var userUrl = '/backend/user';

	  	httpService.getDatas('GET', userUrl + '/findAll')
	  		.then(function(data) {
	  			vm.vipList = data.data;
	  		});
  	};

})();
