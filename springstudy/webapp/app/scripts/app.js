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
    .config(function ($provide) {
        // 自定义常量数组routes, 内容为待注册路由
        $provide.constant('routes',
            [
            {
                name: 'main',
                url: '/main',
                controller: 'MainCtrl',
                templateUrl: 'views/main.html',
                data: {
                    title: '教师管理',
                    show: true
                }
            },
            {
                name: 'main.add', // 继承main路由，并且声明自己的名字为add
                url: '/add', // 相当于 /main/add，由于继承main路由
                controller: 'MainAddCtrl', // 控制器名称
                templateUrl: 'views/main/add.html',
                data: {
                    title: '增加',
                    show: false
                }
            },
            {
                name: 'main.view',
                url: '/view/:id',
                controller: 'MainViewCtrl',
                templateUrl: 'views/main/view.html',
                data: {
                    title: '查看',
                    show: false
                }
            },
            {
                name: 'main.edit',
                url: '/edit/:id',
                templateUrl: 'views/main/edit.html',
                controller: 'MainEditCtrl',
                data: {
                    title: '编辑',
                    show: false
                }
            },
            {
                name: 'klass',
                url: '/klass',
                controller: 'KlassIndexCtrl',
                templateUrl: 'views/klass/index.html',
                data: {
                    title: '班级管理',
                    show: true
                }
            },
            {
                name: 'klass.add', // 继承klass路由，并且声明自己的名字为add
                url: '/add', // 相当于 /klass/add，由于继承klass路由
                controller: 'KlassAddCtrl', // 控制器名称
                templateUrl: 'views/klass/add.html',
                data: {
                    title: '增加',
                    show: false
                }
            },
            {
                name: 'klass.edit', // 继承klass路由，并且声明自己的名字为edit
                url: '/edit/:id', // 相当于 /klass/edit，由于继承klass路由
                controller: 'KlassEditCtrl', // 控制器名称
                templateUrl: 'views/klass/edit.html',
                data: {
                    title: '编辑',
                    show: false
                }
            },
            {
                name: 'klass.view', // 继承klass路由,并且声明自己的名字为view
                url: '/view/:id',
                controller: 'KlassViewCtrl',
                templateUrl: 'views/klass/view.html',
                data: {
                    title: '查看',
                    show: false
                }
            }
        ])
    })

    // $stateProvider 设置路由, $urlRouterProvider 路由重定向
    .config(function ($stateProvider, $urlRouterProvider, $provide, $httpProvider, routes) {
        // 循环注册路由
        angular.forEach(routes, function (value) {
            $stateProvider
                .state(value);
        });

        $urlRouterProvider.otherwise('/main');

        // 注册一个用于拦截http的拦截器
        $provide.factory('myHttpInterceptor', function ($q) {
            return {
                // 拦截请求信息
                'request': function (config) {
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
    });