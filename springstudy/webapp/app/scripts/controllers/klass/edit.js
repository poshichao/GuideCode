'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:KlassEditCtrl
 * @description
 * # KlassEditCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('KlassEditCtrl', function($scope, $http, $stateParams) {
        var self = this;

        self.init = function() {
            var id = $stateParams.id;
            var url = 'http://127.0.0.1:8080/Klass/' + id;

            $http.get(url)
                .then(function success(response) {
                    // 将获取的数据传递给V层,进行绑定
                    $scope.data = response.data;
                }, function error(response) {
                    console.log('error ' + url, response);
                })
        };

        self.submit = function() {
            var id = $stateParams.id;
            var url = 'http://127.0.0.1:8080/Klass/' + id;

            $http.get(url)
                .then(function success(response) {
                    // 将获取的数据传递给V层,进行绑定
                    $scope.data = response.data;
                    console.log('更新成功');
                }, function error(response) {
                    console.log('error ' + url, response);
                })
        }

        self.init();
        $scope.submit = self.submit;
    });