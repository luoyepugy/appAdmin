(function() {
    'use strict';


angular.module('app')
  .controller('authRoleEditCtrl', authRoleEditCtrl);

    function authRoleEditCtrl(httpService, $stateParams, messageService, $rootScope) {
        var vm = this;

        var roleEditUrl = '/backend/role',
            roleId = $stateParams.roleId;

        // 发送给服务器的接口列表数据
        var interfaceList = [],
            menuList = [];

        // 选中的接口权限对象
        vm.checkedInterfaces = {};
        vm.checkedMenus = {};

        // 显示在视图上的变量
        vm.interfaceList = [];
        vm.menuList = [];

        vm.setInterface = setInterface;
        vm.setMenu = setMenu;
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

            // 获取菜单列表
            var length = $rootScope.menuList.length;
            for(var i=0; i<length; i++) {
                var childLength = $rootScope.menuList[i].childMenu.length;
                for(var j=0; j<childLength; j++) {
                    vm.menuList.push($rootScope.menuList[i].title + ' / ' + $rootScope.menuList[i].childMenu[j].title);
                }
            }
        }

        // 全选接口权限
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
                interfaceList = [];
                messageService.show('接口权限修改成功', true);
            });
        }
        // 设置菜单权限
        function setMenu() {
            var menuListArray = [],
                menuFlag = 0,
                authAdmin = false,
                authRole = false;
            for(var i in vm.checkedMenus) {
                if(vm.checkedMenus[i]) {
                    menuListArray.push(i);
                }
            }
            for(var j=0; j<menuListArray.length; j++) {
                if(menuListArray[j] == '会员管理 / 会员列表') {
                    menuList.push({'title': '会员管理', 'isOpen': false, 'childMenu': [
                        {'title': '会员列表', 'state': 'admin.vip-list', 'isActive': false, 'menuIndex': 0}
                        ]
                    });
                } else if(menuListArray[j] == '订单管理 / 订单列表') {
                    menuList.push({'title': '订单管理', 'isOpen': false, 'childMenu': [
                        {'title': '订单列表', 'state': 'admin.order-list', 'isActive': false, 'menuIndex': 1},
                        ]
                    });
                } else if(menuListArray[j] == '权限管理 / 管理员列表') {
                    menuFlag += 1;
                    authAdmin = true;
                } else if(menuListArray[j] == '权限管理 / 角色列表') {
                    menuFlag += 1;
                    authRole = true;
                }
            }
            if(menuFlag == 1) {
                if(authAdmin) {
                    menuList.push({'title': '权限管理', 'isOpen': false, 'childMenu': [
                        {'title': '管理员列表', 'state': 'admin.auth-list', 'isActive': false, 'menuIndex': 2}
                        ]
                    });
                } else if(authRole) {
                    menuList.push({'title': '权限管理', 'isOpen': false, 'childMenu': [
                        {'title': '角色列表', 'state': 'admin.auth-role', 'isActive': false, 'menuIndex': 2}
                        ]
                    });
                }
            } else if(menuFlag == 2) {
                menuList.push({'title': '权限管理', 'isOpen': false, 'childMenu': [
                    {'title': '管理员列表', 'state': 'admin.auth-list', 'isActive': false, 'menuIndex': 2},
                    {'title': '角色列表', 'state': 'admin.auth-role', 'isActive': false, 'menuIndex': 2}
                    ]
                });
            }
            console.log(vm.checkedMenus);
            console.log(menuList);
            // httpService.getDatas('POST', roleEditUrl + '/setMenuList', {'id': roleId, 'menuList':menuList})
            // .then(function(data) {
            //     menuList = [];
            //     messageService.show('菜单权限修改成功', true);
            // });
        }

    };

})();