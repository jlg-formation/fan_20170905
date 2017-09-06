(function() {
	'use strict';

	const app = angular.module('main', []);

	app.run(function($rootScope) {
		$rootScope.name = 'LaCipav';
	});
})();
