/**
 *添加角色angular控制器 
 */
define(['app'], function(app){
	return ['$scope', '$http', function($scope, $http){
		$scope.addRoleForm = function(){
			//获取添加角色所需数据
			var $roleName = $('#roleName').val(),
				$roleRemark = $('#roleRemark').val(),
				$roleStatus = $('#roleStatus').val();
			//判断角色状态是否为空
			if($roleStatus=='0' || $roleStatus==null){
				alert('请选择角色状态');
				return;
			}
			//将数据传到后端
			$http({
				url : addRoleFormPath,
				data : {
					name : $roleName,
					remark : $roleRemark,
					status : $roleStatus
				},
				method : 'post'
			}).then(function(result){
				switch(result.data){
					case '0':
						alert('添加失败，请重新操作！');
						break;
					case '1':
						alert('添加成功');
						break;
				}
			});
		}
	}];
});