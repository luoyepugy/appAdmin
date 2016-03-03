(function() {
    'use strict';


angular.module('app')
    .controller('adminCtrl', adminCtrl);
  	
  	function adminCtrl() {
  		var vm = this;

        vm.isExit = false;
        vm.account = account;
        vm.signout = signout;
        vm.menu = menu;
        vm.childMenu = childMenu;

        // vm.userName = window.localStroge.getItem('userName');

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
            // window.localStroge.clear();
            // $state('signin');
            console.log('signout')
        }
        // 点击账号按钮
        function account() {
            vm.isExit = !vm.isExit;
        }
  	}

})();
