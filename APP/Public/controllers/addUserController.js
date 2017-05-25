/**
 *添加用户angular控制器 
 */
define(['app'], function(app){
	return ['$scope', '$http', function($scope, $http){
		$scope.addUserForm = function(){
			//获取用户数据
			var $uname = $('#uname').val(),
				$upwd = $('#upwd').val(),
				$email = $('#email').val();
			//验证各项数据是否为空
			if(!$uname || !$upwd || !$email){
				alert('请填写完整用户相关信息');
				return;
			}
			//向后台发送数据
			$http({
				url : addUserFormPath,
				data : {
					uname : $uname,
					upwd : $upwd,
					email : $email
				},
				method : 'post'
			}).then(function(result){
				switch(result.data){
					case '1':
						alert('添加成功');
						break;
					case '2':
						alert('添加失败');
						break;
				}
			});
		}
	}];
});