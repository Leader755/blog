/**
 *节点列表angular控制器 
 */
define(['app', 'nodeListSer'], function(app){
	return app.controller('nodeListCtr', ['$scope', '$http', 'nodeListSer', function($scope, $http, nodeListSer){
		//从nodeListServer服务中获取节点数据
		nodeListSer.nodeData().then(function(result){
			$scope.nodeList = result;
		});
	}]);
});