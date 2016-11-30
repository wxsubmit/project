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
  .module('projectApp', ['ui.router','chart.js','textAngular']).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when('','/login');
	$stateProvider.state('login',{
		url:'/login',
	    templateUrl:"views/login.html",
	    controller:"loginCtrl"
	}).state('list',{
	    url:'/list',
	    templateUrl:"views/list.html",
	    controller:"listCtrl"
	}).state('details',{
	    url:'/details/:id',
	    templateUrl:"views/details.html",
	    controller:"detailsCtrl"
	}).state('release',{
	    url:'/release',
	    templateUrl:"views/release.html",
	    controller:"releaseCtrl"
	}).state('form',{
	    url:'/form',
	    templateUrl:"views/form.html",
	    controller:"PolarAreaCtrl"
	})
}]).filter("impor",function(){
	return function(e){
		if(e==0){
			return "重要"
		}else if(e==1){
			return "中等"
		}else if(e==2){
			return "一般"
		}
	}
}).controller("PolarAreaCtrl", function ($scope) {
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
  
  $scope.data = [300, 500, 100, 40, 120,180];
});
