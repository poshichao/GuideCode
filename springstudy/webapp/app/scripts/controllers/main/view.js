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

        // 初始化获取当前对象
        self.init = function() {
            var url = '/Teacher/' + $stateParams.id;

            $http.get(url)
                .then(function success(response) {
                    $scope.data = response.data;
                }, function error(response) {
                    console.log('error', response);
                });
        };
        self.init();
    });