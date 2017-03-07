<?php if (!defined('THINK_PATH')) exit();?><div class="allTable"><table cellpadding="0" cellspacing="0"><thead><tr><td>名称</td><td>状态</td><td>操作</td></tr></thead><tbody><tr ng-repeat="(k, v) in roleList"><td>{{v.remark}}</td><td><span ng-if="v.status==1">开启</span><span ng-if="v.status==0">关闭</span></td><td><a href="javascript:;" onclick="removeRole(this, this.getAttribute('rid'));" rid="{{v.id}}">删除</a>|
					<a ui-sref="accessList({rid:v.id})">配置权限</a></td></tr></tbody></table></div><script type="text/javascript">	function removeRole(This, rid){
		if(confirm('确认删除此角色？删除之后不可恢复')){
			$.ajax({
				url : '<?php echo U("Admin/Rbac/removeRoleForm");?>',
				type : 'post',
				data : {
					rid : rid
				},
				success : function(result){
					switch(result){
						case '0':
							alert('删除失败');
							break;
						case '1':
							alert('删除成功');
							$(This).parents('tr').remove();
							break;
					}
				}
			});
		}
	}
</script>