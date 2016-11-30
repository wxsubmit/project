/**
 * Created by jingguanran on 2016/11/23.
 */
angular.module('projectApp').controller("listCtrl", ['$scope', '$state', '$http', '$rootScope', function($scope, $state, $http, $rootScope) {
	$http({
		url: "http://www.bugcenter.com.cn:1511/users/" +$rootScope.user.uid,
		method: "get"
	}).success(function(e) {
		if(e.charactor == 0) {
			$scope.isshow = false;
			$scope.clas = "设计";
		};
		if(e.charactor == 1) {
			$scope.isshow = false;
			$scope.clas = "前端";
		};
		if(e.charactor == 2) {
			$scope.isshow = false;
			$scope.clas = "后台";
		};
		if(e.charactor == 3) {
			$scope.isshow = true;
			$scope.clas = "测试";
			$http({
				url: "http://www.bugcenter.com.cn:1511/item",
				method: "get"
			}).success(function(e) {
				$scope.data = e;
				console.log(e);
			});
			
			
		};
		console.log(e);
	});
	
	$scope.jz=function (){
				$state.go('release');
			}
	/*$scope.datail=function (){
		//window.location.href="views/details.html";
		$state.go('details');
	}*/
	$scope.s=0;
	$scope.fn=function (e){
		$scope.s=e;
		$http({
			url: "http://www.bugcenter.com.cn:1511/item",
			method: "get",
			params: {
				'to': $rootScope.user.username
			}
		}).success(function(e) {
			$scope.data.push(e);
		});
	}
	
	
	$http({
		url: "http://www.bugcenter.com.cn:1511/item",
		method: "get",
		params: {
			'to': $rootScope.user.username
		}
	}).success(function(e) {
		$scope.data = e;
		console.log(e);
	});
	
	/*$http({
		url: "http://www.bugcenter.com.cn:1511/item",
		method: "get"
	}).success(function(e) {
		$scope.data = e;
		console.log(e);
	});*/
	
	
}]).filter("f",function (){
	return function (e,page,size){
		var  start=page*size
		var end=(page+1)*size
		if(e!=undefined){
			return e.slice(start,end)
		}
	}
})
