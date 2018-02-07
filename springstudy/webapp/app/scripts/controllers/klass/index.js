'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:KlassIndexCtrl
 * @description
 * # KlassIndexCtrl
 * 班级管理 首页
 */
angular.module('testApp')
    .controller('KlassIndexCtrl', function ($scope, $http, klass) {
        var self = this;
        var page = 0;

        // 初始化班级信息
        self.init = function (page) {
            klass.page(page, 3, function (data) {
                $scope.data = data;
            });
        };

        // 删除
        self.delete = function (object) {
            klass.delete(object, function () {
                object._delete = true;
            })
        };

        self.init(page);
        $scope.delete = self.delete;
        $scope.reload = self.init;
    });