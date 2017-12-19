'use strict';

describe('Controller: MainAddCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var MainAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainAddCtrl = $controller('MainAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainAddCtrl.awesomeThings.length).toBe(3);
  });
});
