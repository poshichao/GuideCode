'use strict';

/**
 * @ngdoc service
 * @name testApp.teacher
 * @description
 * # 教师
 * Service in the testApp.
 */
angular.module('testApp')
  .service('teacher', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var self = this;

    self.getAllTeachers = function(callback) {
    	var url = 'http://127.0.0.1:8080/Teacher/';

            $http.get(url)
                .then(function success(response) {
                    callback(response.data);
                }, function error() {
                    console.log('error');
                });
    };

    return {
    	getAllTeachers: self.getAllTeachers
    };
  });
