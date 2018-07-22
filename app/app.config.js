angular.module('app').config(configStateProvider);

function configStateProvider($stateProvider, $urlRouterProvider, $locationProvider) {
	'ngInject';
	// @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
	// #how-to-configure-your-server-to-work-with-html5mode
	$locationProvider.html5Mode(false);

	var appState = {
		name: 'app',
		abstract: true,
		template: '<app></app>'
	};
	var homePageState = {
		name: 'home',
		url: '/',
		template: '<home-page></home-page>'
	};
	$urlRouterProvider.otherwise('/');
	$stateProvider.state(appState);
	$stateProvider.state(homePageState);
}
