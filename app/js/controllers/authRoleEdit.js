(function() {
    'use strict';


angular.module('app')
  .controller('authRoleEditCtrl', authRoleEditCtrl);

    function authRoleEditCtrl(httpService, $stateParams, messageService) {
        var vm = this;

        var roleEditUrl = '/backend/role',
            roleId = $stateParams.roleId;

        // 发送给服务器的接口列表数据
        var interfaceList = [],
            menuList = [];

        // 选中的接口权限对象
        vm.checkedInterfaces = {};
        vm.checkedMenus = {};

        // 全选按钮的默认设置
        vm.allMenu = false;
        vm.allInterface = false;

        // 显示在视图上的变量
        vm.interfaceList = [];
        // 列出菜单列表
        vm.menuList = [
            {'name': '会员管理 / 会员列表', 'id': 11},
            {'name': '订单管理 / 订单列表', 'id': 21},
            {'name': '权限管理 / 管理员列表', 'id': 31},
            {'name': '权限管理 / 角色列表', 'id': 32}
        ];

        vm.setInterface = setInterface;
        vm.setMenu = setMenu;
        vm.checkedAllInterface = checkedAllInterface;
        vm.checkedAllMenu = checkedAllMenu;

        load();
        // 页面加载
        function load() {
            // 获取当前角色信息
            httpService.getDatas('GET', roleEditUrl + '/findOne/' + roleId)
            .then(function(data) {
                var datas = data.data,
                    interfaceLength = datas.interfaceList.length,
                    menuListLength = datas.menuList.length;

                vm.roleDetail = datas;

                for(var i=0; i<interfaceLength; i++) {
                    vm.checkedInterfaces[datas.interfaceList[i]] = true;
                }
                for(var j=0; j<menuListLength; j++) {
                    vm.checkedMenus[datas.menuList[j]] = true;
                }
            });
            // 获取所有接口
            httpService.getDatas('GET', '/backend/access/getAllInterfaces')
            .then(function(data) {
                vm.interfaceList = data.data;
            });  
        }

        // 全选接口权限
        function checkedAllInterface(allInterface) {
            for(var i in vm.interfaceList){
                vm.checkedInterfaces[vm.interfaceList[i].route] = allInterface;
            }
        }

        // 全选菜单权限
        function checkedAllMenu(allMenu) {
            for(var i in vm.menuList){
                vm.checkedMenus[vm.menuList[i].id] = allMenu;
            }
        }

        // 设置接口权限
        function setInterface() {
            interfaceList = [];
            for(var i in vm.checkedInterfaces) {
                if(vm.checkedInterfaces[i]) {
                    interfaceList.push(i);
                }
            }
            // console.log(interfaceList);
            httpService.getDatas('POST', roleEditUrl + '/setInterfaceList', {'id': roleId, 'interfaceList': interfaceList})
            .then(function(data) {
                messageService.show('接口权限修改成功', true);
            });
        }
        // 设置菜单权限
        function setMenu() {
            menuList = [];
            for(var i in vm.checkedMenus) {
                if(vm.checkedMenus[i]) {
                    menuList.push(i);
                }
            }
            // console.log(menuList);
            httpService.getDatas('POST', roleEditUrl + '/setMenuList', {'id': roleId, 'menuList': menuList})
            .then(function(data) {
                messageService.show('菜单权限修改成功', true);
            });
        }

    };

})();