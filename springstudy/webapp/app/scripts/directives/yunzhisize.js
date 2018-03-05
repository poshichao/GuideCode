'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:yunzhiSize
 * @description
 * # 每页大小
 * @Autuor poshichao
 */
angular.module('testApp')
    .directive('yunzhiSize', function () {
        return {
            scope: {
                ngModel: '=',
                reload: '='         // 触发加载的函数
            },
            templateUrl: 'views/directive/yunzhiSize.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                console.log(scope);
            }
        };
    });
