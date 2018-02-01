'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainEditCtrl
 * @description
 * # MainEditCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('MainEditCtrl', function($scope, $stateParams, $http, $state) {
        // 固定写法,初始化C层文件
        var self = this;

        self.init = function() {
            // 接收ID,然后使用ID获取我们想要编辑的实体
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

        self.submit = function() {
            var id = $stateParams.id;
            var url = '/Teacher/' + id;
            $http.put(url, $scope.data)
                .then(function success(response) {
                    console.log('数据更新成功');
                    $state.go('main', {}, {reload: true});
                }, function error(response) {
                    console.log('数据更新失败');
                })
        };

        self.init();
        $scope.submit = self.submit;
    });