'use strict';

describe('Controller: KlassAddCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var KlassAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KlassAddCtrl = $controller('KlassAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(KlassAddCtrl.awesomeThings.length).toBe(3);
  });
});
