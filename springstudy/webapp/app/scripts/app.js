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
            name: 'klass',
            url: '/klass',
            controller: 'KlassIndexCtrl',
            templateUrl: 'views/klass/index.html'
        })

        // 创建一个新的路由
        .state({
            name: 'klass.add',   // 继承klass路由，并且声明自己的名字为add
            url: '/add',        // 相当于 /klass/add，由于继承klass路由
            controller: 'KlassAddCtrl',   // 控制器名称
            templateUrl: 'views/klass/add.html'
        })

        // 创建一个新的路由
        .state({
            name: 'klass.edit',   // 继承klass路由，并且声明自己的名字为edit
            url: '/edit/:id',        // 相当于 /klass/edit，由于继承klass路由
            controller: 'KlassEditCtrl',   // 控制器名称
            templateUrl: 'views/klass/edit.html'
        })


        $urlRouterProvider.otherwise('/main');

    });
