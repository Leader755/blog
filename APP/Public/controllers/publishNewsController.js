/**
 *发布新闻angular控制器 
 */
define(['app'], function(app){
	return ['$scope', '$http', function($scope, $http){
		$scope.publishNews = function(){
			//获取新闻数据
			var $title = $('#newsTitle').val(),
				$content = $('div[contenteditable=true]').html();
			//验证数据是否齐全
			if($title=='' || $title==null || $content=='' || $content==null){
				alert('新闻标题和正文必须填写完整!');
				return;
			}
			//向后端提交数据
			$http({
				url : publishNewsFormPath,
				data : {
					title : $title,
					content : $content
				},
				method : 'post'
			}).then(function(result){
				switch(result.data){
					case '0':
						alert('发布失败，请重新操作');
						break;
					case '1':
						alert('发布成功');
						window.location.reload();
						break;
					case '2':
						alert('文章标题和内容必须填写完整');
						break;
				}
			});
		}
	}];
});