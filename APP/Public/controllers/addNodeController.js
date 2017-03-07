/**
 *添加节点angular控制器 
 */
define(['app'], function(app){
	return app.controller('addNodeCtr', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
		//判断节点具体名称
		switch($stateParams.level){
			case '1':
				$scope.nodeType = '应用';
				break;
			case '2':
				$scope.nodeType = '控制器';
				break;
			case '3':
				$scope.nodeType = '方法';
				break;
		}
		$scope.confirmAddNode = function(){
			//获取节点数据
			var $nodeName = $('#nodeName').val(),
				$nodeRemark = $('#nodeRemark').val(),
				$nodeStatus = parseInt($('#nodeStatus').val()),
				$nodePid =  $stateParams.pid ? $stateParams.pid : 0;
				$nodeLevel = $stateParams.level ? $stateParams.level : 1;
			//判断状态值是否为false
			if(!$nodeStatus){
				alert('请选择节点状态');
				return;
			}
			//向后台发送数据
			$http({
				url : addNodeFormPath,
				method : 'post',
				data : {
					name : $nodeName,
					remark : $nodeRemark,
					status : $nodeStatus,
					pid : $nodePid,
					level : $nodeLevel
				}
			}).then(function(result){
				switch(result.data){
					case '0':
						alert('添加失败，节点信息必须填写完整！');
						break;
					case '1':
						alert('节点添加成功！');
						break;
				}
			});
		}
	}]);
});