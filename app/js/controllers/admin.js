(function() {
    'use strict';


angular.module('app')
    .controller('adminCtrl', adminCtrl);
  	
  	function adminCtrl($state) {
  		var vm = this;

        vm.isOpen = false;          // 顶部导航右侧账号下拉菜单状态
        vm.signout = signout;       // 退出账号
        vm.menu = menu;             // 左侧一级菜单
        vm.childMenu = childMenu;   // 左侧二级菜单

        // 当前用户名称
        vm.userName = window.localStorage.getItem('userName');

        // 菜单列表
        vm.menuList = [
            {'menuTitle': '会员管理', 'isOpen': true, 'childMenuList': [
                {'childMenuTitle': '列表', 'state': 'admin.vip-list', 'isActive': true, 'menuIndex': 0},
                {'childMenuTitle': '列表2', 'state': 'admin.vip-review', 'isActive': false, 'menuIndex': 0,}
                ]
            },
            {'menuTitle': '订单管理', 'isOpen': false, 'childMenuList': [
                {'childMenuTitle': '列表', 'state': 'admin.vip-list', 'isActive': false, 'menuIndex': 1},
                {'childMenuTitle': '列表2', 'state': 'admin.vip-review', 'isActive': false, 'menuIndex': 1}
                ]
            },
            {'menuTitle': '权限管理', 'isOpen': false, 'childMenuList': [
                {'childMenuTitle': '列表', 'state': 'admin.vip-list', 'isActive': false, 'menuIndex': 2},
                {'childMenuTitle': '列表2', 'state': 'admin.vip-list', 'isActive': false, 'menuIndex': 2}
                ]
            },
        ];
        
        // 一级菜单
        function menu(index) {
            var menuLength = vm.menuList.length;
            for(var i=0; i<menuLength; i++) {
                if(i === index) {
                    vm.menuList[i].isOpen = !vm.menuList[i].isOpen;
                } else {
                    vm.menuList[i].isOpen = false;
                }
            }
        }
        // 二级菜单
        function childMenu(index, menuIndex) {
            var childMenuLength = vm.menuList[menuIndex].childMenuList.length;
            for(var i=0; i<childMenuLength; i++) {
                if(i === index) {
                    vm.menuList[menuIndex].childMenuList[i].isActive = !vm.menuList[menuIndex].childMenuList[i].isActive;
                } else {
                    vm.menuList[menuIndex].childMenuList[i].isActive = false;
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
