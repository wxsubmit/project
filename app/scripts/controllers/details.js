/**
 * Created by jingguanran on 2016/11/23.
 */
angular.module('projectApp').controller("detailsCtrl", ['$scope', '$state', '$http', '$rootScope','$stateParams', function($scope, $state, $http, $rootScope,$stateParams) {
	$http({
		url: "http://www.bugcenter.com.cn:1511/item/"+$stateParams.id,
		method: "get"
	}).success(function (e) {
		console.log(e);
		$scope.data = e;
		if(e.importance == 0){
			$scope.impor="重要";
			$scope.im="im";
		}else if(e.importance == 1){
			$scope.impor="中等";
			$scope.im="orange";
		}else if(e.importance == 2){
			$scope.impor="一般";
			$scope.im="blue";
		};
		
		
		
		if(e.status== 0){
			$scope.status = "已指派";
		}else if(e.status== 1){
			$scope.status = "已解决";
			$("#save").css("display","none");
		}else if(e.status== 2){
			alert("此条bug已关闭");
			$scope.status = "已关闭";
			$("#save").css("display","none");
		}
		
		if(e.classify == 0){
			$scope.classify ="ui设计";
			$scope.class = "white";
		}else if(e.classify == 1){
			$scope.classify ="前端";
			$scope.class = "white";
		}else if(e.classify == 2){
			$scope.classify ="后台";
			$scope.class = "white";
		};
		console.log(e);
	});
	
	$scope.sa=function (){
		$http({
			url: "http://www.bugcenter.com.cn:1511/item/"+$stateParams.id,
			method: "put",
			data:{status:1}
		}).success(function (e){
			if(e.status==1){
				$scope.status ="已解决";
				$("#save").css("display","none");
			}
		})
	}

}])