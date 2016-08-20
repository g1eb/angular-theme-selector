'use strict';

/**
 * Theme selector directive
 */
angular.module('g1b.theme-selector', []).
directive('themeSelector', function () {
  return {
    restrict: 'E',
    scope: {
      themes: '=',
      selected: '=',
      onSelect: '&'
    },
    replace: true,
    templateUrl: './theme-selector.html',
    compile: function () {
      return {
        pre: function preLink() {},
        post: function postLink(scope, element) {
        }
      };
    }
  };
});
