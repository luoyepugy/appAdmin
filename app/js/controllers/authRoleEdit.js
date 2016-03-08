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
            });
            // 获取所有接口
            httpService.getDatas('GET', '/backend/access/getAllInferfaces')
            .then(function(data) {
                vm.interfaceList = data;
            });
        }

        // 设置接口权限
        function setInterface() {
            var interfaceList = [];
            for(var i in vm.checkedInterfaces) {
                if(vm.checkedInterfaces[i]) {
                    interfaceList.push(i);
                }
            }
            httpService.getDatas('POST', roleEditUrl + '/setInterfaceList', {'id': roleId, 'inferfaceList':interfaceList})
            .then(function(data) {

            });
        }
        // 设置菜单权限
        function setMenu() {
            httpService.getDatas('POST', roleEditUrl + '/setMenuList')
            .then(function(data) {

            });
        }

    };

})();