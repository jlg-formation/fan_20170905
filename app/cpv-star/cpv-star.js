(function() {
	'use strict';

	const app = angular.module('cpv-star', []);

	app.directive('cpvStar', function() {
		return {
			restrict: 'E',
			scope: {
				n: '<?note'
			},
			controller: function CpvStarCtrl($scope, $element, $compile) {
				// Surtout pas $element !
				console.log('CpvStarCtrl', arguments);
				$scope.update = function(newNote) {
					console.log('update', arguments);
					$scope.n = newNote;
				};
				$scope.$watch('n', function() {
					let html = '';
					let note = $scope.n || 3;
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
		};
	});

})();
