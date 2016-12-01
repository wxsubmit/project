angular.module('projectApp').controller("PolarAreaCtrl",['$scope','$http', function ($scope,$http) {
  $scope.labels = ["前端", "后台", "测试", "UI"];
  $scope.data = [0, 0, 0, 0];
  $http({
  	url: "http://www.bugcenter.com.cn:1511/users",
  	method: "get"
  }).success(function(e) {
  	for(var i = 0; i < e.length; i++) {
  		if(e[i].charactor == 0) {
  			$scope.data[0] += 1
  		} else if(e[i].charactor == 1) {
  			$scope.data[1] += 1
  		} else if(e[i].charactor == 2) {
  			$scope.data[2] += 1
  		} else if(e[i].charactor == 3) {
  			$scope.data[3] += 1
  		}
  	}
  })	
    
  $scope.oA_one=function(){
  	$scope.labels = ["前端", "后台", "测试", "UI"];
	  $scope.data = [0,0,0,0];
	  $http({
	    url:"http://www.bugcenter.com.cn:1511/users",
	    method:"get"
	}).success(function(e){
	  for(var i=0;i<e.length;i++){
		if(e[i].charactor==0){
			$scope.data[0]+=1
		}else if(e[i].charactor==1){
			$scope.data[1]+=1
		}else if(e[i].charactor==2){
			$scope.data[2]+=1
		}else if(e[i].charactor==3){
			$scope.data[3]+=1
		}
	  }
	})
  }
  
  $scope.oA_two=function(){
  	$scope.labels = ["重要", "中等", "一般"];
	  $scope.data = [0,0,0];
	  $http({
	    url:"http://www.bugcenter.com.cn:1511/item",
	    method:"get"
	}).success(function(e){
	  for(var i=0;i<e.length;i++){
		if(e[i].importance ==0){
			$scope.data[0]+=1
		}else if(e[i].importance ==1){
			$scope.data[1]+=1
		}else if(e[i].importance ==2){
			$scope.data[2]+=1
		}
	  }
	})
  }
  
  $scope.oA_three=function(){
  	$scope.labels = ["偶尔", "经常"];
	  $scope.data = [0,0];
	  $http({
	    url:"http://www.bugcenter.com.cn:1511/item",
	    method:"get"
	}).success(function(e){
	  for(var i=0;i<e.length;i++){
		if(e[i].frequency==0){
			$scope.data[0]+=1
		}else if(e[i].frequency==1){
			$scope.data[1]+=1
		}
	  }
	})
  }
  
}]);