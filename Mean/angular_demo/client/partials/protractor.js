it('should test service', function() {
  expect(element(by.id('simple')).element(by.model('message')).getAttribute('value'))
      .toEqual('test');
});

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
