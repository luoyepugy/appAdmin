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
        templateUrl: 'views/admin.html'
    })
    // vip
    .state("admin.vip-list",{
        url:"/vip-list",
        templateUrl:"views/vip/list.html",
        controller:"vipListCtrl",
        controllerAs:"vm",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/vipList.js");
            }]
        }
    })
    .state("admin.vip-review",{
        url:"/vip-review",
        templateUrl:"views/vip/review.html",
        controller:"vipReviewCtrl",
        controllerAs:"vipReview",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/vipReview.js");
            }]
        }
    });
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