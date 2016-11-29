angular.module('projectApp').controller('releaseCtrl',['$scope','$http','$state',function($scope,$http,$state){
	$scope.Sdata=['ui','前端','后台'];
	$scope.Sdata1=['重要','中等','一般'];
	$scope.Sdata2=['偶尔','经常'];
	$scope.Sdata3=['已指派','已解决','已关闭'];
	$scope.Sdata4=['wyc','lnn','jgr'];	    	
	$scope.Sifmdata={};	
	$scope.Sfn= function(e){
		$scope.Sifmdata.classify=e;				
	}
	
	$scope.fn=function(e){
		$scope.Sifmdata.to = $scope.Sdata4[e];
	}
	
	$scope.Sfn1 = function(e){
		$scope.Sifmdata.importance =e
	}
	
	$scope.Sfn2 = function(e){
		$scope.Sifmdata.frequency =e
	}
	
	$scope.Sfn3 = function(e){
		$scope.Sifmdata.status =e
	}
	$scope.pushbug=function(){		
		$scope.Sifmdata.summary=$scope.Stext;
		$scope.Sifmdata.description=$scope.Stext1;
		$scope.Sifmdata.from ='csd';
		var time = new Date();
		var m = time.getMonth() + 1;
		var nowtime=time.getFullYear() + "-" + m + "-"
     + time.getDate() + " " + time.getHours() + ":"
     + time.getMinutes() + ":" + time.getSeconds();
     $scope.Sifmdata.date = nowtime;
		console.log($scope.Sifmdata)
		$http({
			url:'http://www.bugcenter.com.cn:1511/item/',
			method:'post',
			data:$scope.Sifmdata
		}).success(function(e){
		
			$state.go('list')
		})
	}
}])
	
