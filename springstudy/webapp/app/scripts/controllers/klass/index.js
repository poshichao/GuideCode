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

        // 初始化班级信息
        self.init = function () {
            $scope.params = {page: 0, size: 3};
            self.load();
        };

        // 加载数据
        self.load = self.reload = function () {
            klass.page($scope.params, function (data) {
                $scope.data = data;
            });
        };

        // 分页时重新加载数据
        self.reloadByPage = function (page) {
            $scope.params.page = page;
            self.reload();
        };

        self.reloadBySize = function (size) {
            $scope.params.size = size;
            self.load();
        };

        // 删除
        self.delete = function (object) {
            klass.delete(object, function () {
                object._delete = true;
            });
        };

        self.init();
        $scope.delete = self.delete;
        $scope.reloadByPage = self.reloadByPage;
        $scope.reloadBySize = self.reloadBySize;
    });