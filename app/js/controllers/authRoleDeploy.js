(function() {
    'use strict';


angular.module('app')
  .controller('authRoleDeployCtrl', authRoleDeployCtrl);

  	function authRoleDeployCtrl(httpService, $state, $stateParams) {
	  	var vm = this;

	  	var roleUrl = '/backend/role',
	  		adminUrl = '/backend/admin',
	  		adminId = $stateParams.adminId;
	  		
	  	vm.checkedRole = {};

	  	vm.deployRole = deployRole;

	  	load();
	  	// 页面加载
	  	function load() {
	  		httpService.getDatas('GET', roleUrl + '/findAll')
	  		.then(function(data) {
	  			vm.authRoleDeploy = data.data;
	  		});
	  		httpService.getDatas('GET', adminUrl + '/getCompletelyInfos/' + 'test')
	  		.then(function(data) {
	  			var datas = data.data,
                    length = datas.role.length;
                for(var i=0; i<length; i++) {
                    vm.checkedRole[datas.role[i]['_id']] = true;
                }
	  		});
	  	}

	  	function deployRole() {
	  		var roleIds = [];
	  		for(var i in vm.checkedRole) {
                if(vm.checkedRole[i]) {
                    roleIds.push(i);
                }
            }
	  		httpService.getDatas('POST', '/backend/adminRole/upsert', {'adminId': adminId, 'roles': roleIds})
	  		.then(function(data) {
	  			$state.go('admin.auth-list');
	  		});
	  	}

  	};

})();