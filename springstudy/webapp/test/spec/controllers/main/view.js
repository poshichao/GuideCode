'use strict';

describe('Controller: MainViewCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var MainViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainViewCtrl = $controller('MainViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainViewCtrl.awesomeThings.length).toBe(3);
  });
});
