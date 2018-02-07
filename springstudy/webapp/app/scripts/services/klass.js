'use strict';

/**
 * @ngdoc service
 * @name testApp.klass
 * @description
 * # 班级
 */
angular.module('testApp')
    .service('klass', function ($http) {
        var self = this;

        /**
         * 分页
         * @param page      第几页
         * @param size      每页大小
         * @param callback
         * poshichao
         */
        self.page = function (page, size, callback) {
            var url = '/Klass/page';

            // 定义参数
            var params = {
                page: page,
                size: size
            };

            // 使用参数发起get请求
            $http.get(url, {params: params})
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error(response) {
                    console.log('error', response);
                });
        };

        /**
         * 删除
         * @param object 删除的对象
         * @param callback
         */
        self.delete = function (object, callback) {
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
            delete: self.delete,
            page: self.page
        };
    });