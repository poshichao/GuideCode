'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:KlassAddCtrl
 * @description
 * # KlassAddCtrl
 * 班级管理 增加
 */
angular.module('testApp')
    .controller('KlassAddCtrl', function($scope, $http, $state, teacher) {

        var self = this;
        self.init = function() {
            $scope.data = {
                name: '',
                teacher: {}
            };

        };

        // 保存提交
        self.submit = function() {
            var url = '/Klass/';

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