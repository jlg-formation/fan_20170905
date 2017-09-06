(function() {
	'use strict';

	const app = angular.module('main', []);

	app.run(function($rootScope) {
		$rootScope.name = 'LaCipav';
    });
    
    app.directive('cpvHeader', function () {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/cpv-header.html'
		};
    });
    
  })();
