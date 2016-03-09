(function() {
    'use strict';


angular.module('app')
    .controller('adminCtrl', adminCtrl);
  	
  	function adminCtrl($state, $rootScope) {
  		var vm = this;

        vm.isOpen = false;          // 顶部导航右侧账号下拉菜单状态
        vm.signout = signout;       // 退出账号
        vm.menu = menu;             // 左侧一级菜单
        vm.childMenu = childMenu;   // 左侧二级菜单

        // 当前用户名称
        vm.userName = window.localStorage.getItem('userName');

        // 菜单列表
        $rootScope.menuList = [
            {'title': '会员管理', 'isOpen': true, 'childMenu': [
                {'title': '会员列表', 'state': 'admin.vip-list', 'isActive': true, 'menuIndex': 0}
                ]
            },
            {'title': '订单管理', 'isOpen': false, 'childMenu': [
                {'title': '订单列表', 'state': 'admin.order-list', 'isActive': false, 'menuIndex': 1},
                ]
            },
            {'title': '权限管理', 'isOpen': false, 'childMenu': [
                {'title': '管理员列表', 'state': 'admin.auth-list', 'isActive': false, 'menuIndex': 2},
                {'title': '角色列表', 'state': 'admin.auth-role', 'isActive': false, 'menuIndex': 2}
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
                    $rootScope.menuList[menuIndex].childMenu[i].isActive = !$rootScope.menuList[menuIndex].childMenu[i].isActive;
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
