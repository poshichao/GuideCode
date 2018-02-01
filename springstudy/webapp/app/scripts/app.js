'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 * Main module of the application.
 */
angular
    .module('testApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    // $stateProvider 设置路由, $urlRouterProvider 路由重定向
    .config(function($stateProvider, $urlRouterProvider, $provide, $httpProvider) {
        $stateProvider
            .state({
                name: 'main',
                url: '/main',
                controller: 'MainCtrl',
                templateUrl: 'views/main.html'
            })

            // 创建一个新的路由
            .state({
                name: 'main.add', // 继承main路由，并且声明自己的名字为add
                url: '/add', // 相当于 /main/add，由于继承main路由
                controller: 'MainAddCtrl', // 控制器名称
                templateUrl: 'views/main/add.html'
            })

            // 创建一个查看路由
            .state({
                name: 'main.view',
                url: '/view/:id',
                controller: 'MainViewCtrl',
                templateUrl: 'views/main/view.html'
            })

            // 创建一个编辑就路由
            .state({
                name: 'main.edit',
                url: '/edit/:id',
                templateUrl: 'views/main/edit.html',
                controller: 'MainEditCtrl'
            })

            .state({
                name: 'klass',
                url: '/klass',
                controller: 'KlassIndexCtrl',
                templateUrl: 'views/klass/index.html'
            })

            // 创建一个新的路由
            .state({
                name: 'klass.add', // 继承klass路由，并且声明自己的名字为add
                url: '/add', // 相当于 /klass/add，由于继承klass路由
                controller: 'KlassAddCtrl', // 控制器名称
                templateUrl: 'views/klass/add.html'
            })

            // 创建一个新的路由
            .state({
                name: 'klass.edit', // 继承klass路由，并且声明自己的名字为edit
                url: '/edit/:id', // 相当于 /klass/edit，由于继承klass路由
                controller: 'KlassEditCtrl', // 控制器名称
                templateUrl: 'views/klass/edit.html'
            })

            // 班级查看路由
            .state({
                name: 'klass.view', // 继承klass路由,并且声明自己的名字为view
                url: '/view/:id',
                controller: 'KlassViewCtrl',
                templateUrl: 'views/klass/view.html'
            })

        // 注册一个用于拦截http的拦截器
        $provide.factory('myHttpInterceptor', function($q   ) {
            return {
                // 拦截请求信息
                'request': function(config) {
                    // 如果以html结尾,就不进行url改写,否则进行改写
                    var suffix = config.url.split('.').pop();
                    if (suffix !== 'html') {
                        config.url = 'http://127.0.0.1:8080' + config.url;
                    }
                    return config;
                }
            };
        });

        $httpProvider.interceptors.push('myHttpInterceptor');

        $urlRouterProvider.otherwise('/main');

    });