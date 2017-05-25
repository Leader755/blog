/**
 *后台编辑文章angular控制器 
 */
define(['app'], function(app){
	return ['$scope', '$http', '$stateParams', '$sce', function($scope, $http, $stateParams, $sce){
		$http({
			url : editNewsDataPath,
			data : {
				nid : $stateParams.nid
			},
			method : 'post'
		}).then(function(result){
			$scope.title = result.data[0].title;
			$scope.content = $sce.trustAsHtml(result.data[0].content);
		});
	}];
});