import 'angular/angular-csp.css';
import './style.css';
import 'angular';
import './cpv-star/cpv-star.js';
import cpvHeaderHtml from './tmpl/cpv-header.html';
import cpvBodyHtml from './tmpl/cpv-body.html';
import cpvFooterHtml from './tmpl/cpv-footer.html';

const app = angular.module('main', ['cpv-star']);

app.run(function($rootScope) {
	$rootScope.name = 'LaCipav';
});

app.directive('cpvHeader', function() {
	return {
		restrict: 'E',
		template: cpvHeaderHtml
	};
});

app.directive('cpvBody', function() {
	return {
		restrict: 'E',
		template: cpvBodyHtml
	};
});

app.directive('cpvFooter', function() {
	return {
		restrict: 'E',
		template: cpvFooterHtml
	};
});
