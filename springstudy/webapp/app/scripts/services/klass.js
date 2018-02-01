'use strict';

/**
 * @ngdoc service
 * @name testApp.klass
 * @description
 * # 班级
 */
angular.module('testApp')
    .service('klass', function($http) {
    	var self = this;

    	// 删除
    	self.delete = function(object, callback) {
    		var url = '/Klass/' + object.id;

    		// 调用后台的删除方法 
    		$http.delete(url)
    		.then(function success(response) {
    			if (callback) {
    			callback(object);
    		}
    		}, function error(response) {
    			console.log('error', response);
    		});
				
    	};

    	return {
    		delete: self.delete
    	};
    });