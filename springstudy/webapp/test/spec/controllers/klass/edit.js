'use strict';

describe('Controller: KlassEditCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var KlassEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KlassEditCtrl = $controller('KlassEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(KlassEditCtrl.awesomeThings.length).toBe(3);
  });
});
