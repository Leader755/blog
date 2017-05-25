/**
 * 翻页测试angular控制器
 */

define(['app'], function(app){
	return ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
		$http({
			url : pageShowDataPath,
			data : {
				currentPage : $stateParams.currentPage
			},
			method : 'post'
		}).then(function(result){
			$scope.userData = result.data;
			$scope.currentPage = Number(result.data.currentPage);
		});
	}];
});