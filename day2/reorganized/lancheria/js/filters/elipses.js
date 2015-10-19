angular.module('lancheria').filter('elipses', function() {
  return function(input, size) {
    if (input.length > size) {
      return input.substr(0, size) + '...';
    }
    return input;
  };
});
