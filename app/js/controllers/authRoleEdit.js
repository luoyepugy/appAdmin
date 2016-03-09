(function() {
    'use strict';


angular.module('app')
  .controller('authRoleEditCtrl', authRoleEditCtrl);

    function authRoleEditCtrl(httpService, $stateParams, messageService) {
        var vm = this;

        var roleEditUrl = '/backend/role',
            roleId = $stateParams.roleId;

        var interfaceList = [];

        // 选中的接口权限对象
        vm.checkedInterfaces = {};

        vm.setInterface = setInterface;
        vm.setMenu = vm.setMenu;
        vm.choiceAll = choiceAll;

        load();
        // 页面加载
        function load() {
            // 获取当前角色信息
            httpService.getDatas('GET', roleEditUrl + '/findOne/' + roleId)
            .then(function(data) {
                var datas = data.data,
                    length = datas.interfaceList.length;
                vm.roleDetail = datas;
                for(var i=0; i<length; i++) {
                    vm.checkedInterfaces[datas.interfaceList[i]] = true;
                }
            });
            // 获取所有接口
            httpService.getDatas('GET', '/backend/access/getAllInterfaces')
            .then(function(data) {
                vm.interfaceList = data;
            });
        }

        // 全选
        function choiceAll() {
            for(var i in vm.interfaceList) {
                vm.checkedInterfaces[vm.interfaceList[i].route] = vm.checkedAll;
                if(vm.checkedAll) {
                    interfaceList.push(vm.interfaceList[i].route);
                } else {
                    interfaceList = [];
                }
                
            }
        }

        // 设置接口权限
        function setInterface() {
            for(var i in vm.checkedInterfaces) {
                if(vm.checkedInterfaces[i]) {
                    interfaceList.push(i);
                }
            }
            httpService.getDatas('POST', roleEditUrl + '/setInterfaceList', {'id': roleId, 'interfaceList':interfaceList})
            .then(function(data) {
                messageService.show('接口权限修改成功', true);
            });
        }
        // 设置菜单权限
        function setMenu() {
            httpService.getDatas('POST', roleEditUrl + '/setMenuList')
            .then(function(data) {
                messageService.show('菜单权限修改成功', true);
            });
        }

    };

})();