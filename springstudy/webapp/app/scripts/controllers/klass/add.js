'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:KlassAddCtrl
 * @description
 * # KlassAddCtrl
 * 班级管理 增加
 */
angular.module('testApp')
    .controller('KlassAddCtrl', function($scope, $http, $state) {

        var self = this;
        self.init = function() {
            $scope.data = {
                name: '',
                teacher: {}
            };

            self.getAllTeachers();
        };

        // 获取所有的教师
        self.getAllTeachers = function() {
            var url = 'http://127.0.0.1:8080/Teacher/';

            $http.get(url)
                .then(function success(response) {
                    $scope.teachers = response.data;
                }, function error() {
                    console.log('error');
                });
        }

        // 保存提交
        self.submit = function() {
            var url = 'http://127.0.0.1:8080/Klass/';

            $http.post(url, $scope.data)
                .then(function success(response) {
                    $state.transitionTo('klass', {}, {reload: true});
                }, function error() {
                    console.log('error');
                });
        };

        self.init();
        $scope.submit = self.submit;
    });