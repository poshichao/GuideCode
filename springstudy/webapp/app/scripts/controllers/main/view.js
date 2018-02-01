'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainViewCtrl
 * @description
 * # MainViewCtrl
 * 教师 查看
 */
angular.module('testApp')
    .controller('MainViewCtrl', function($scope, $http, $stateParams) {
        var self = this;
        self.init = function() {

            var id = $stateParams.id;
            var url = '/Teacher/' + id;
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