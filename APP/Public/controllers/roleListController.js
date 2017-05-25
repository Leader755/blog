/**
 *角色管理angular控制器 
 */
define(['app'], function(app){
	return ['$scope', '$http', function($scope, $http){
		//获取角色列表数据
		$http({
			url : roleListDataPath,
			method : 'post'
		}).then(function(result){
			$scope.roleList = result.data;
		});
	}];
});