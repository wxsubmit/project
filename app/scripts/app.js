'use strict';

/**
 * @ngdoc overview
 * @name projectApp
 * @description
 * # projectApp
 *
 * Main module of the application.
 */
angular
  .module('projectApp', ['ui.router']).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when('','/login');
	$stateProvider.state('login',{
		url:'/login',
	    templateUrl:"views/login.html",
	    controller:"loginCtrl"
	}).state('list',{
	    url:'/list',
	    templateUrl:"views/list.html",
	    controller:"listCtrl"
	}).state('details.abc',{
	    url:'/abc?id',
	    templateUrl:"views/abc.html",
	    controller:"detailsCtrl"
	}).state('release',{
	    url:'/release',
	    templateUrl:"views/release.html",
	    controller:"releaseCtrl"
	})
}]);
