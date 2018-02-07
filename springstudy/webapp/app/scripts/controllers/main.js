'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('MainCtrl', function ($scope, $http, teacher) {
        var self = this;
        var url = '/Teacher';

        $http.get(url)
            .then(function success(response) {
                $scope.lists = response.data;
            }, function error() {
                console.log('error');
            })

        self.delete = function(object) {
            teacher.delete(object, function() {
                object._delete = true;
            })
        };

        $scope.delete = self.delete;
    });
