/**
 *节点列表angular控制器 
 */
define([], function(){
	return ['$scope', '$http', function($scope, $http){
		//获取节点数据
        $http({
            url : nodeListDataPath,
            method : 'post'
        }).then(function(result){
            $scope.nodeList = result.data;
        });
	}];
});