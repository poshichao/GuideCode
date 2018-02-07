'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:yunzhiPage
 * @description
 * # 分页
 */
angular.module('testApp')
    .directive('yunzhiPage', function () {
        return {
            scope: {
                number: '=',        // 代表对应前台的data-number
                totalPages: '=',     // 代表对应前台的data-totalPages
                first: '=',
                last: '=',
                reload: '='         // 点击切换页数时触发的方法
            },

            templateUrl: 'views/directive/yunzhiPage.html',
            restrict: 'E',
            link: function postLink(scope) {
                var self = this;
                self.maxPageCount = 5;

                self.init = function () {
                    // 监听number
                    scope.$watch('number', self.watchNumber);
                };

                // 获取一般页数的信息
                self.getHalfMaxPageCount = function () {
                    return Math.floor(self.maxPageCount / 2);
                };

                // 生成分页信息
                self.generatePage = function (number, maxPageCount, totalPages) {
                    var pages = [];
                    var page = number + 1;
                    var beginPage = 1;
                    var endPage = maxPageCount;
                    var halfMaxPageCount = self.getHalfMaxPageCount();

                    // 判断是否不是前面的几页
                    if (page + halfMaxPageCount > self.maxPageCount) {
                        // 如果是后面的几页
                        if (page + halfMaxPageCount > totalPages) {
                            beginPage = totalPages - halfMaxPageCount * 2;
                            endPage = totalPages;
                        } else {
                            // 中间的几页
                            beginPage = page - halfMaxPageCount;
                            endPage = page + halfMaxPageCount;
                        }
                    }

                    // 判断总页码是否超出了范围
                    endPage = endPage > totalPages ? totalPages : endPage;

                    for (var i = beginPage; i <= endPage; i++) {
                        pages.push(i);
                    }
                    return pages;
                };

                // 监听当前页是否发生变化
                self.watchNumber = function (newValue) {
                    if (typeof (newValue) !== 'undefined') {
                        scope.pages = self.generatePage(scope.number, self.maxPageCount, scope.totalPages);
                    }
                };

                // 点击页码
                self.changePage = function (page) {
                    // 重新加载数据
                    scope.reload(page - 1);
                };

                self.isActive = function (page) {
                    if (page - 1 === scope.number) {
                        return true;
                    } else {
                        return false;
                    }
                };

                self.init();
                scope.changePage = self.changePage;
                scope.isActive = self.isActive;
            }
        };
    });
