'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:menu
 * @description
 * # 导航菜单
 */
angular.module('testApp')
    .directive('menu', function ($state, routes) {
        return {
            templateUrl: 'views/directive/menu.html',
            restrict: 'E',
            link: function postLink($scope) {
                var self = this;
                self.init = function () {
                };

                /**
                 * 是否点亮菜单
                 * @param name
                 * @returns {boolean}
                 */
                self.isActive = function (state) {
                    // 获取当前路由
                    var currentState = $state.$current;

                    // 存在parent属性
                    if (currentState.parent) {
                        // 一直找到根路由
                        while (currentState.parent.parent !== null) {
                            currentState = currentState.parent;
                        }

                        // 判断根路由,如果当前的路由是teacher, 返回真
                        if ($state.current.name === state)
                            return true;
                        else
                            return false;
                    }

                };

                self.init();
                $scope.isActive = self.isActive;
                $scope.console = console;
                $scope.$state = $state;
                $scope.routes = routes;
            }
        };
    });
