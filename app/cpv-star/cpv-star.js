(function() {
	'use strict';

	const app = angular.module('cpv-star', []);

    app.directive('cpvStar', function () {
		return {
			restrict: 'E',
			templateUrl: 'cpv-star/tmpl/cpv-star.html'
		};
    });
    
  })();
