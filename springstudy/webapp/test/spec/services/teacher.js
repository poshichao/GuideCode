'use strict';

describe('Service: teacher', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var teacher;
  beforeEach(inject(function (_teacher_) {
    teacher = _teacher_;
  }));

  it('should do something', function () {
    expect(!!teacher).toBe(true);
  });

});
