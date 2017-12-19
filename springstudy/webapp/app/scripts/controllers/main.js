'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('MainCtrl', function ($scope, $http) {
        var url = 'http://127.0.0.1:8080/Teacher'

        var success = function(response) {
            $scope.lists = response.data;
            console.log('success');
        }

        var error = function() {
            console.log('error');
        }

        var promise = $http.get(url);
        promise.then(success, error);
    });
