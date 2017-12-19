'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainViewCtrl
 * @description
 * # MainViewCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('MainViewCtrl', function($scope, $http, $stateParams) {
        var self = this;
        self.init = function() {

            var id = $stateParams.id;
            var url = 'http://127.0.0.1:8080/Teacher/' + id;
            $http.get(url)
                .then(function success(response) {
                    $scope.data = response.data;
                }, function error(response) {
                    console.log(url + 'error');
                    console.log(response);
                })
        };

        self.init();

    });