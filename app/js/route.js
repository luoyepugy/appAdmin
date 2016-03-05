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
        templateUrl:"views/signin.html",
        controller:"signinCtrl",
        controllerAs:"vm",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/signin.js");
            }]
        }
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
        url:"/order-list/:orderId",
        cache: false,
        templateUrl:"views/order/list.html",
        controller:"orderListCtrl",
        controllerAs:"vm",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/orderList.js");
            }]
        }
    })
    .state("admin.order-edit",{
        url:"/order-edit",
        templateUrl:"views/order/edit.html",
        controller:"orderEditCtrl",
        controllerAs:"vm",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/orderEdit.js");
            }]
        }
    })
    // .state("ngtree",{
    //     url:"/ngtree",
    //     templateUrl:"views/angular-tree-control.html",
    //     controller:"ngTreeCtrl",
    //     controllerAs:"ngtree",
    //     resolve:{
    //         deps:["$ocLazyLoad",function($ocLazyLoad){
    //             return $ocLazyLoad.load("treeControl").then(
    //                 function(){
    //                     return $ocLazyLoad.load("js/controllers/angular-tree-control.js");
    //                 }
    //             );
    //         }]
    //     }
    // })
};

})();