/**
 * Created by tyw on 15/6/8.
 */
angular.module('vkhimmanager.databinding', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/databinding', {
            templateUrl: "module/test/databinding.html",
            controller: "databindingcontroller"
        })
    }])

    .controller('databindingcontroller', ['$scope', function ($scope) {
        $scope.inputA = 'input A text';
    }]);