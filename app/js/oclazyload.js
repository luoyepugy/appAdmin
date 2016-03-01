
(function() {
    'use strict';

angular.module('app')
.constant("Modules_Config",[
    // {
    //     name:"ngTable",
    //     module:true,
    //     files:[
    //         "Scripts/ng-table/dist/ng-table.min.css",
    //         "Scripts/ng-table/dist/ng-table.min.js"
    //     ]
    // },
    // {
    //     name:"ui.bootstrap",
    //     module:true,
    //     files:[
    //         "Scripts/angular-bootstrap/ui-bootstrap-tpls-0.14.3.min.js"
    //     ]
    // }
])
.config(config);

function config($ocLazyLoadProvider,Modules_Config){
    $ocLazyLoadProvider.config({
        debug:false,
        events:false,
        modules:Modules_Config
    });
};

})();