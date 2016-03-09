(function() {
    'use strict';


angular.module('app')
    .controller('adminCtrl', adminCtrl);
  	
  	function adminCtrl($state, httpService) {
  		var vm = this;

        var adminUrl = '/backend/admin';

        vm.isOpen = false;          // 顶部导航右侧账号下拉菜单状态
        vm.signout = signout;       // 退出账号
        vm.menu = menu;             // 左侧一级菜单
        vm.childMenu = childMenu;   // 左侧二级菜单

        // 当前用户名称
        vm.userName = window.localStorage.getItem('userName');

        // load();

        // function load() {
        //     httpService.getDatas('GET', adminUrl + '/getMenuList/' + vm.userName)
        //     .then(function(data) {
        //         $rootScope.menuList = data.data;
                // var menuListArray = [],
                    //     menuFlag = 0,
                    //     authAdmin = false,
                    //     authRole = false;
                    // for(var j=0; j<menuListArray.length; j++) {
            //     if(menuListArray[j] == '会员管理 / 会员列表') {
            //         menuList.push({'title': '会员管理', 'isOpen': false, 'childMenu': [
            //             {'title': '会员列表', 'state': 'admin.vip-list', 'isActive': false, 'menuIndex': 0}
            //             ]
            //         });
            //     } else if(menuListArray[j] == '订单管理 / 订单列表') {
            //         menuList.push({'title': '订单管理', 'isOpen': false, 'childMenu': [
            //             {'title': '订单列表', 'state': 'admin.order-list', 'isActive': false, 'menuIndex': 1},
            //             ]
            //         });
            //     } else if(menuListArray[j] == '权限管理 / 管理员列表') {
            //         menuFlag += 1;
            //         authAdmin = true;
            //     } else if(menuListArray[j] == '权限管理 / 角色列表') {
            //         menuFlag += 1;
            //         authRole = true;
            //     }
            // }
            // if(menuFlag == 1) {
            //     if(authAdmin) {
            //         menuList.push({'title': '权限管理', 'isOpen': false, 'childMenu': [
            //             {'title': '管理员列表', 'state': 'admin.auth-list', 'isActive': false, 'menuIndex': 2}
            //             ]
            //         });
            //     } else if(authRole) {
            //         menuList.push({'title': '权限管理', 'isOpen': false, 'childMenu': [
            //             {'title': '角色列表', 'state': 'admin.auth-role', 'isActive': false, 'menuIndex': 2}
            //             ]
            //         });
            //     }
            // } else if(menuFlag == 2) {
            //     menuList.push({'title': '权限管理', 'isOpen': false, 'childMenu': [
            //         {'title': '管理员列表', 'state': 'admin.auth-list', 'isActive': false, 'menuIndex': 2},
            //         {'title': '角色列表', 'state': 'admin.auth-role', 'isActive': false, 'menuIndex': 2}
            //         ]
            //     });
            // }
        //     });
    
        // }

        // 菜单列表
        vm.menuList = [
            {'title': '会员管理', 'isOpen': true, 'childMenu': [
                {'title': '会员列表', 'state': 'admin.vip-list', 'isActive': true, 'menuIndex': 0, 'index': 0}
                ]
            },
            {'title': '订单管理', 'isOpen': false, 'childMenu': [
                {'title': '订单列表', 'state': 'admin.order-list', 'isActive': false, 'menuIndex': 1, 'index': 1},
                ]
            },
            {'title': '权限管理', 'isOpen': false, 'childMenu': [
                {'title': '管理员列表', 'state': 'admin.auth-list', 'isActive': false, 'menuIndex': 2, 'index': 2},
                {'title': '角色列表', 'state': 'admin.auth-role', 'isActive': false, 'menuIndex': 2, 'index': 3}
                ]
            }
        ];

        
        // 一级菜单
        function menu(index) {
            var menuLength = $rootScope.menuList.length;
            for(var i=0; i<menuLength; i++) {
                if(i === index) {
                    $rootScope.menuList[i].isOpen = !$rootScope.menuList[i].isOpen;
                } else {
                    $rootScope.menuList[i].isOpen = false;
                }
            }
        }
        // 二级菜单
        function childMenu(index, menuIndex) {
            var childMenuLength = $rootScope.menuList[menuIndex].childMenu.length;
            for(var i=0; i<childMenuLength; i++) {
                if(i === index) {
                    $rootScope.menuList[menuIndex].childMenu[i].isActive = true;
                } else {
                    $rootScope.menuList[menuIndex].childMenu[i].isActive = false;
                }
            }
        }
        // 退出账号
        function signout() {
            window.localStorage.clear();
            $state.go('signin');
        }
  	}

})();
