(function() {
    'use strict';

angular.module('app')
.config(route);

function route($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/signin");

    $stateProvider
    // 登录
    .state("signin",{
        url:"/signin",
        templateUrl:"views/signin.html"
    })
    // 主要结构
    .state('admin', {
        url: '/admin',
        templateUrl: 'views/admin.html',
        controller:"adminCtrl",
        controllerAs:"vm",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/admin.js");
            }]
        }
    })
    // 修改密码
    .state('admin.changePwd', {
        url: '/admin-changePwd',
        templateUrl: 'views/changePwd.html'
    })
    // vip会员
    .state("admin.vip-list",{
        url:"/vip-list",
        cache: false,
        templateUrl:"views/vip/list.html",
        controller:"vipListCtrl",
        controllerAs:"vm",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/vipList.js");
            }]
        }
    })
    .state("admin.vip-edit",{
        url:"/vip-edit/:vipId",
        templateUrl:"views/vip/edit.html",
        controller:"vipEditCtrl",
        controllerAs:"vm",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/vipEdit.js");
            }]
        }
    })
    // order订单
    .state("admin.order-list",{
        url:"/order-list",
        cache: false,
        templateUrl:"views/order/list.html",
        controller:"orderListCtrl",
        controllerAs:"vm",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/filters/order-offerShow.filter.js").then(
                    function(){
                        return $ocLazyLoad.load("js/controllers/orderList.js");
                    }
                );
            }]
        }
    })
    .state("admin.order-edit",{
        url:"/order-edit/:orderId",
        templateUrl:"views/order/edit.html",
        controller:"orderEditCtrl",
        controllerAs:"vm",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/orderEdit.js");
            }]
        }
    })
    .state("admin.order-offerList",{
        url:"/order-offerList/:orderId",
        templateUrl:"views/order/offer-list.html",
        controller:"orderOfferListCtrl",
        controllerAs:"vm",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/orderOfferList.js");
            }]
        }
    })
    // auth权限
    .state("admin.auth-list",{
        url:"/auth-list",
        cache: false,
        templateUrl:"views/auth/list.html",
        controller:"authListCtrl",
        controllerAs:"vm",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/authList.js");
            }]
        }
    })
    .state("admin.auth-listEdit",{
        url:"/auth-listEdit/:userName",
        templateUrl:"views/auth/list-edit.html",
        controller:"authListEditCtrl",
        controllerAs:"vm",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/authListEdit.js");
            }]
        }
    })
    .state("admin.auth-addAdmin",{
        url:"/auth-addAdmin",
        templateUrl:"views/auth/add-admin.html"
    })
    .state("admin.auth-role",{
        url:"/auth-role",
        cache: false,
        templateUrl:"views/auth/role.html",
        controller:"authRoleCtrl",
        controllerAs:"vm",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/authRole.js");
            }]
        }
    })
    .state("admin.auth-roleEdit",{
        url:"/auth-roleEdit",
        templateUrl:"views/auth/role-edit.html",
        controller:"authRoleEditCtrl",
        controllerAs:"vm",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/authRoleEdit.js");
            }]
        }
    })
    .state("admin.auth-addRole",{
        url:"/auth-addRole",
        templateUrl:"views/auth/add-role.html"
    });
};

})();