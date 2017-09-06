(function() {
	'use strict';

	const app = angular.module('cpv-star', []);

    app.directive('cpvStar', function () {
		return {
            restrict: 'E',
            controller: function CpvStarCtrl($scope, $element, $attrs, $transclude) {
                console.log('CpvStarCtrl', arguments);
                $element.html('<b>Mr. Sarr</b>');
            }
		};
    });
    
  })();
