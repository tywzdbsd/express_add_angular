/**
 * Created by tyw on 15/6/9.
 */
angular.module('vkhimmanager.index', ['ngRoute', 'treeControl'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/index', {
            templateUrl: "module/index/index.html",
            controller: "indexcontroller"
        })
    }])

    .controller('indexcontroller', ['$scope', '$rootScope','$location', function ($scope, $rootScope,$location) {
        $scope.pagename = 'index';

        $rootScope.topage = function(api){
            $location.path(api);
        };
    }])
;