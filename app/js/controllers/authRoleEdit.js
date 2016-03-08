(function() {
    'use strict';


angular.module('app')
  .controller('authRoleEditCtrl', authRoleEditCtrl);

    function authRoleEditCtrl(httpService, $stateParams) {
        var vm = this;

        var roleEditUrl = '/backend/role',
            roleId = $stateParams.roleId;

        // vm.inferfaceList = [];

        vm.setInterface = setInterface;
        vm.setMenu = vm.setMenu;

        load();
        // 页面加载
        function load() {
            // 获取当前角色信息
            httpService.getDatas('GET', roleEditUrl + '/findOne/' + roleId)
            .then(function(data) {
                vm.roleDetail = data.data;
                console.log(vm.roleDetail.interfaceList);
            });
            // 获取所有接口
            httpService.getDatas('GET', '/backend/access/getAllInferfaces')
            .then(function(data) {
                vm.inferfaceList = data;
            });
        }

        function setInterface() {
            var interfaceList = [];
            for(var i in vm.checkedInterfaces) {
                if(vm.checkedInterfaces[i]) {
                    interfaceList.push(i);
                }
            }
            httpService.getDatas('POST', roleEditUrl + '/setInterfaceList', {'id': roleId, 'interfaceList':interfaceList})
            .then(function(data) {

            });
        }

        function setMenu() {
            httpService.getDatas('POST', roleEditUrl + '/setMenuList')
            .then(function(data) {

            });
        }

    };

})();