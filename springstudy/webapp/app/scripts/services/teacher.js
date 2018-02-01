'use strict';

/**
 * @ngdoc service
 * @name testApp.teacher
 * @description
 * # 教师
 * Service in the testApp.
 */
angular.module('testApp')
    .service('teacher', function($http) {
        var self = this;

        self.getAllTeachers = function(callback) {
            var url = '/Teacher/';

            $http.get(url)
                .then(function success(response) {
                    callback(response.data);
                }, function error() {
                    console.log('error');
                });
        };

        self.delete = function(object, callback) {
            var url = '/Teacher/' + object.id;
            $http.delete(url)
                .then(function success() {
                    if (callback) {
                        callback(object);
                    }
                }, function error() {
                    console.log('删除失败!');
                });
        };

        return {
            getAllTeachers: self.getAllTeachers,
            delete: self.delete
        };
    });