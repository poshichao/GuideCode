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
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state({
            name: 'main',
            url: '/main',
            controller: 'MainCtrl',
            templateUrl: 'views/main.html'
        })

        // 创建一个新的路由
        .state({
            name: 'main.add',   // 继承main路由，并且声明自己的名字为add
            url: '/add',        // 相当于 /main/add，由于继承main路由
            controller: 'MainAddCtrl',   // 控制器名称
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
            name: 'about',
            url: '/about',
            controller: 'AboutCtrl',
            templateUrl: 'views/about.html'
        })


        $urlRouterProvider.otherwise('/');

    });
