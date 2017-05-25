/**
 *用户列表angular控制器 
 */
define([], function(){
	return ['$scope', '$http',function($scope, $http){
		//获取用户列表数据
        $http({
            url : userListDataPath,
            method : 'post'
        }).then(function(result){
            $scope.userList = result.data;
        });

		//删除用户
		$scope.removeUser = function(uid){
			if(confirm('确认删除此用户？删除之后不可恢复！')){
				$http({
					url : removeUserFormPath,
					data : {
						uid : uid
					},
					method : 'post'
				}).then(function(result){
					switch(result.data){
						case '1':
							alert('删除成功');
							window.location.reload();
							break;
						case '0':
							alert('删除失败请重新操作');
							break;
					}
				});
			}
		};

		//分配角色弹窗
		$scope.assignRole = function(uid){
			$scope.uid = uid;
			//获取角色列表
            $http({
                url : roleListDataPath,
                method : 'post'
            }).then(function(result){
                $scope.roleList = result.data;
            });
			//获取当前用户已经关联的角色
            $http({
                url : roleToUserPath,
                data : {
                    uid : uid
                },
                method : 'post'
            }).then(function(result){
                var resultLen = result.length;
                var $rid = $('.rid'),
                    $ridLen = $rid.length;
                for(var i=0; i<$ridLen; i++){
                    for(var j=0; j<resultLen; j++){
                        if($rid.eq(i).val()==result[j].role_id){
                            $rid.eq(i).prop('checked', true);
                            continue;
                        }
                    }
                }
            });
			//弹窗显示
			$('#askWindow').show();
		};

		//确认分配角色
		$scope.confirmAssign = function(){
			//复选框被选中的角色
			var $rid = $('.rid'),
				$ridLen = $rid.length,
				$ridArry = [];
			for(var i=0; i<$ridLen; i++){
				if($rid.eq(i).prop('checked')){
					$ridArry.push($rid.eq(i).val());
				}
			}
			//向后台发送数据
			if($ridArry.length>0){
				$http({
					url : assignRoleFormPath,
					data : {
						uid : $scope.uid,
						ridArry : $ridArry
					},
					method : 'post'
				}).then(function(result){
					switch(result.data){
						case '0':
							alert('角色分配失败，请重新操作');
							break;
						case '1':
							alert('角色分配成功');
							$('#askWindow').hide();
							break;
					}
				});
			}
		};
		//取消关联，关闭窗口
		$scope.cancelAssign = function(){
			$('#askWindow').hide();
		}
	}];
});