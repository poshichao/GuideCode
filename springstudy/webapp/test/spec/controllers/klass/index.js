'use strict';

describe('Controller: KlassIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var KlassIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KlassIndexCtrl = $controller('KlassIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(KlassIndexCtrl.awesomeThings.length).toBe(3);
  });
});
