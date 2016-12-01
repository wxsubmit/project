/**
 * Created by jingguanran on 2016/11/23.
 */
angular.module('projectApp').controller("loginCtrl",['$rootScope','$scope','$state','$http','locals',function($rootScope,$scope,$state,$http,locals){
	/*if(locals){
		$scope.upuser.username=locals.get("username"," ");
		//pass.value=locals.get("password","");
	}*/
	
  $scope.fn=function(){
  	
		$http({
	      url:"http://www.bugcenter.com.cn:1511/users/login",
	      method:"post",
	      data:$scope.upuser
	    }).success(function(e){
	      $rootScope.user={};
	      $rootScope.user.username=$scope.upuser.username;
	      $rootScope.user.uid = e.uid;
	      locals.set("username",$scope.upuser.username);
	      locals.set("password",$scope.upuser.password);
	      locals.set("uid",e.id);
	      $state.go('list');
	      console.log(e)
	    })
	
  }
}]).factory('locals',['$window',function($window){
      return{        //存储单个属性
        set :function(key,value){
          $window.localStorage[key]=value;
        },        //读取单个属性
        get:function(key,defaultValue){
          return  $window.localStorage[key] || defaultValue;
        },        //存储对象，以JSON格式存储
        setObject:function(key,value){
          $window.localStorage[key]=JSON.stringify(value);
        },        //读取对象
        getObject: function (key) {
          return JSON.parse($window.localStorage[key] || '{}');
        }
      }
  }]);
