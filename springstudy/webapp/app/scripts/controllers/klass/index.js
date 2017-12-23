'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:KlassIndexCtrl
 * @description
 * # KlassIndexCtrl
 * 班级管理 首页
 */
angular.module('testApp')
    .controller('KlassIndexCtrl', function($scope, $http) {
        var self = this;

        self.init = function() {
            // 定义路由
            var url = 'http://127.0.0.1:8080/Klass/';

            // 获取所有的班级信息
            $http.get(url)
            .then(function success(response) {
                $scope.lists = response.data;
                console.log('success');
            }, function error() {
                console.log('error');
            })
        };

        self.init();
    });