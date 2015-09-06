/**
 * Created by tyw on 15/6/9.
 */
angular.module('vkhimmanager.about', ['ngRoute', 'treeControl'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: "module/about/about.html",
            controller: "aboutcontroller"
        })
    }])

    .controller('aboutcontroller', ['$scope', '$rootScope','$location', function ($scope, $rootScope,$location) {
        $scope.pagename = 'about';
    }])
;