/**
 * Created by tyw on 15/6/5.
 */
"use strict";
angular.module('vkhimmanager', [
    'ngRoute',
    'treeControl',
    'vkhimmanager.databinding',    //test
    'vkhimmanager.index',   //首页内容
    'vkhimmanager.about'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/index'});
    }])

    .run(['$rootScope', '$location', function ($rootScope, $location) {
        $rootScope.goIndex = function () {
            $location.path('/index');
        };
        $rootScope.treeOptions = {
            nodeChildren: "children",
            dirSelectable: true,
            injectClasses: {
                ul: "a1",
                li: "a2",
                liSelected: "a7",
                iExpanded: "a3",
                iCollapsed: "a4",
                iLeaf: "a5",
                label: "a6",
                labelSelected: "a8"
            }
        };
        $rootScope.dataForTheTree =
            [
                {
                    "name": "数据监控", "api": "http://www.baidu.com", "children": [
                    {
                        "name": "用户详情", "api": "/data/users", "children": [
                        {"name": "用户数", "api": "/data/users/number"},
                        {"name": "用户消费情况", "api": "/data/users/buy"}
                    ]
                    },
                    {
                        "name": "相片详情", "api": "/data/albums", "children": [
                        {"name": "相片数数", "api": "/data/albums/number"}
                    ]
                    },
                ]
                },

                {"name": "关于", "api": "/about"}
            ];

        $rootScope.expandedNodes = [$rootScope.dataForTheTree[0],
            $rootScope.dataForTheTree[0].children[0],
            $rootScope.dataForTheTree[0].children[1]
        ];
    }]);