/**
 *用户管理angular服务 
 */
define(['app'], function(app){
	return app.factory('userListSer', ['$http', function($http){
		return {
			//用户列表
			userData: function(){
				return $http({
					url : userListDataPath,
					method : 'post'
				}).then(function(result){
					return result.data;
				});
			},
			//角色列表
			roleData : function(){
				return $http({
					url : roleListDataPath,
					method : 'post'
				}).then(function(result){
					return result.data;
				});
			},
			//用户已经关联的角色
			roleToUser : function(uid){
				return $http({
					url : roleToUserPath,
					data : {
						uid : uid
					},
					method : 'post'
				}).then(function(result){
					return result.data;
				});
			}
		}
	}]);
});