(function(angular) {
  'use strict';
angular.
 module('myServiceModule', []).
  controller('MyController', ['$scope', 'notify', function($scope, notify) {
    $scope.callNotify = function(msg) {
      notify(msg);
    };
  }]).
 factory('notify', ['$window', function(win) {
    var msgs = [];
    return function(msg) {
      msgs.push(msg);
      if (msgs.length === 3) {
        win.alert(msgs.join('\n'));
        msgs = [];
      }
    };
  }]);
})(window.angular);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
