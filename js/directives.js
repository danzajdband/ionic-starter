angular.module('mango', [])
  .directive('mangoForm', ['$window', function($window) {

    var directive = { restrict: 'A' };

    directive.link = function(scope, element, attributes) {
      var form = angular.element(element);
      var button = form.find('button');

      form.bind('submit', function() {

        if (!scope.mango.$valid) {
          return;
        }

        button.prop('disabled', true);

        var data = {
          'holdername': scope.holdername,
          'number': scope.number,
          'type': scope.type,
          'exp_month': scope.expiry.getMonth() + 1,
          'exp_year': scope.expiry.getFullYear(),
          'ccv': scope.ccv
        };

        $window.Mango.token.create(data, function() {
          button.prop('disabled', false);
          var args = arguments;
          scope.$apply(function() {
            scope[attributes.mangoForm].apply(scope, args);
          });
        });

      });

    };

    return directive;

  }]);
