'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainAddCtrl
 * @description
 * # MainAddCtrl
 * Controller of the testApp
 * 教师管理 增加
 */
angular.module('testApp')
  .controller('MainAddCtrl', function ($scope, $http, $state) {
    // 初始化操作
    var self = this;
    self.init = function() {
    		$scope.data = {
    			username: '',
    			name: '',
    			sex: 'true',
    			email: ''
    		};
    };

    self.submit = function() {
    	var url = 'http://127.0.0.1:8080/Teacher/';

    	$http.post(url, $scope.data)
    	.then(function(response) {
            // 进行跳转
    		$state.go('main', {}, {reload: true});
    	}, function(response) {
    		console.log('error');
    	})
    };

    self.init();
    $scope.submit = self.submit;
  });
