(function() {
	'use strict';

	const app = angular.module('cpv-star', []);

	app.directive('cpvStar', function() {
		return {
			restrict: 'E',
			controller: function CpvStarCtrl($scope, $element, $attrs, $transclude) {
				console.log('CpvStarCtrl', arguments);
                let html = '';
                let note = 3;
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
