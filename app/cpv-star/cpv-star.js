(function() {
	'use strict';

	const app = angular.module('cpv-star', []);

	app.directive('cpvStar', function() {
		return {
			restrict: 'E',
			scope: {
				n: '=?note'
			},
			controller: function CpvStarCtrl($scope, $element, $attrs, $transclude) {
				// Surtout pas $element !
				console.log('CpvStarCtrl', arguments);
				let html = '';
				let note = $scope.n || 3;
				for (let i = 0; i < note; i++) {
					html += '<img src="cpv-star/img/yellow_star.png">';
				}
				for (let i = note; i < 5; i++) {
					html += '<img src="cpv-star/img/white_star.png">';
				}
				$element.html(html);
			}
		};
	});

})();
