
(function() {
    'use strict';

var app = angular.module("app",["ui.router","oc.lazyLoad"])
.config(appConfig);

function appConfig($provide,$compileProvider,$controllerProvider,$filterProvider){
    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service  =$provide.service;
    app.constant = $provide.constant;
};

})();