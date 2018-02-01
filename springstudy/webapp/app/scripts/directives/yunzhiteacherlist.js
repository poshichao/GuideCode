'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:yunzhiTeacherList
 * @description
 * # yunzhiTeacherList
 */
angular.module('testApp')
    .directive('yunzhiTeacherList', function(teacher) {
    	var self = {};

    	// 获取所有的教师
        self.getAllTeachers = function($scope) {
            teacher.getAllTeachers(function(teachers) {
                $scope.teachers = teachers;
            });
        };

        return {
            templateUrl: 'views/directive/yunzhiTeacherList.html', // 模板
            restrict: 'E', // 渲染形式
            link: function postLink($scope) {
            	self.getAllTeachers($scope);
            }
        };
    });