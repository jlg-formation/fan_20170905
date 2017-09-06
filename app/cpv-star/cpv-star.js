(function() {
	'use strict';

	const app = angular.module('cpv-star', []);

	app.component('cpvStar', {
		bindings: {
			n: '=?note'
		},
		controller: function CpvStarCtrl($scope, $element, $compile) {
			// Surtout pas $element !
			console.log('CpvStarCtrl xxx', arguments);
			const $ctrl = this;
			$scope.update = function(newNote) {
				console.log('update', arguments);
				$ctrl.n = newNote;
			};
			$scope.$watch('$ctrl.n', function() {
				let html = '';
				let note = $ctrl.n || 3;
				note = (note > 5) ? 5 : note;
				note = (note < 0) ? 0 : note;
				for (let i = 0; i < note; i++) {
					html += '<img ng-click="update(' + (i + 1) + ')" src="cpv-star/img/yellow_star.png">';
				}
				for (let i = note; i < 5; i++) {
					html += `<img ng-click="update(${i+1})" src="cpv-star/img/white_star.png">`;
				}
				$element.html(html);
				$compile($element.contents())($scope);
			});
		}
	});

})();
