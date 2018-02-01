'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:KlassIndexCtrl
 * @description
 * # KlassIndexCtrl
 * 班级管理 首页
 */
angular.module('testApp')
    .controller('KlassIndexCtrl', function($scope, $http, klass) {
        var self = this;

        // 初始化班级信息
        self.init = function() {
            var url = '/Klass/';
            $http.get(url)
            .then(function success(response) {
                $scope.lists = response.data;
            }, function error() {
                console.log('请求教师列表发生错误');
            });
        }

        // 删除
        self.delete = function(object) {
            klass.delete(object, function() {
                object._delete = true;
            })
        };

        self.init();
        $scope.delete = self.delete;
    });