angular.module('mango', []).directive('mangoForm', ['$window',
function($window) {

  var directive = { restrict: 'A' };
  directive.link = function(scope, element, attributes) {
    var form = angular.element(element);
    form.bind('submit', function() {
      var button = form.find('button');
      button.prop('disabled', true);

      var data = {
        'holdername': scope.holdername,
        'number': scope.number,
        'type': scope.type,
        'exp_month': scope.exp_month,
        'exp_year': scope.exp_year,
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
