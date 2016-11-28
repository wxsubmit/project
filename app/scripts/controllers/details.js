/**
 * Created by jingguanran on 2016/11/23.
 */
angular.module('projectApp').controller("detailsCtrl", ['$scope', '$state', '$http', '$rootScope','$stateParams', function($scope, $state, $http, $rootScope,$stateParams) {
	alert($stateParams.abc)
	/*$http({
		url: "http://www.bugcenter.com.cn:1511/item",
		method: "get",
		params: {
			'to': $rootScope.user.username
		}
	}).success(function (e) {
		$scope.data = e;
		if(e.classify==1){
			$scope.fenlei="前端";
		}
		console.log(e);
	});*/
}])