'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:KlassViewCtrl
 * @description
 * # KlassViewCtrl
 * 班级 查看
 */
angular.module('testApp')
    .controller('KlassViewCtrl', function($scope, $http, $stateParams) {
    	self = this;

    	self.init = function() {
    		var id = $stateParams.id;
    		var url = '/Klass/' + id;
    		$http.get(url)
    		.then(function success(response) {
    			$scope.data = response.data;
    		}, function error(response) {
    			console.log(url + 'error');
    			console.log(response);
    		});
    	};

    	self.init();
    });