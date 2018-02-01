'use strict';

describe('Controller: KlassViewCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var KlassViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KlassViewCtrl = $controller('KlassViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(KlassViewCtrl.awesomeThings.length).toBe(3);
  });
});
