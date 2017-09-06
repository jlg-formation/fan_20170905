import 'angular/angular-csp.css';
import './style.css';
import 'angular';
import './cpv-star/cpv-star.js';

const app = angular.module('main', ['cpv-star']);

app.run(function($rootScope) {
	$rootScope.name = 'LaCipav';
});

app.directive('cpvHeader', function() {
	return {
		restrict: 'E',
		templateUrl: 'tmpl/cpv-header.html'
	};
});

app.directive('cpvBody', function() {
	return {
		restrict: 'E',
		templateUrl: 'tmpl/cpv-body.html'
	};
});

app.directive('cpvFooter', function() {
	return {
		restrict: 'E',
		templateUrl: 'tmpl/cpv-footer.html'
	};
});
