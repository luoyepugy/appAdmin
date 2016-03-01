'use strict';

/**
 * @ngdoc overview
 * @name appAdminApp
 * @description
 * # appAdminApp
 *
 * Main module of the application.
 */

"use strict"
var appAdmin = angular.module("appAdmin",["ui.router","oc.lazyLoad"])
.config(["$provide","$compileProvider","$controllerProvider","$filterProvider",
    function($provide,$compileProvider,$controllerProvider,$filterProvider){
        appAdmin.controller = $controllerProvider.register;
        appAdmin.directive = $compileProvider.directive;
        appAdmin.filter = $filterProvider.register;
        appAdmin.factory = $provide.factory;
        appAdmin.service  =$provide.service;
        appAdmin.constant = $provide.constant;
    }]);