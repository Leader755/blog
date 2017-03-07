/**
 * 权限列表angular控制器
 */
define(['app', 'nodeListSer'], function(app){
	return app.controller('accessListCtr', ['$scope', 'nodeListSer', '$stateParams', '$http', function($scope, nodeListSer, $stateParams, $http){
		//节点数据
		nodeListSer.nodeData().then(function(result){
			$scope.nodeList = result;
		});
		//角色id
		$scope.rid = $stateParams.rid;
		//显示现有权限
		$http({
			url : accessListDataPath,
			data : {
				rid : $scope.rid
			},
			method : 'post'
		}).then(function(result){
			var myAccess = result.data,
				myAccessLen = myAccess.length,
				$access = $('.access'),
				$accessLen = $access.length;
			for(var i=0; i<$accessLen; i++){
				for(var j=0; j<myAccessLen; j++){
					if($access.eq(i).val()==myAccess[j].node_id){
						$access.eq(i).prop('checked', true);
						continue;
					}
				}
			}
			
		});
		//修改权限
		$scope.changeAccess = function(rid){
			//获取被选中的节点权限
			var $access = $('.access'),
				$accessLen = $access.length,
				$accessArry = [];
			for(var i=0; i<$accessLen; i++){
				if($access.eq(i).prop('checked')){
					$accessArry.push($access.eq(i).val());
				}
			}
			//判断权限数组是否为空
			if($accessArry.length<1){
				alert('请为角色分配至少一个权限');
				return;
			}
			$http({
				url : changeAccessFormPath,
				data : {
					rid : rid,
					accessArry : $accessArry
				},
				method : 'post'
			}).then(function(result){
				switch(result.data){
					case '0':
						alert('权限分配失败，请重新操作');
						break;
					case '1':
						alert('权限分配成功');
						break;
				}
			});
		}
	}]);
});