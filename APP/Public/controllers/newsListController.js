/**
 *后台新闻列表angular控制器 
 */

define([], function(){
	return ['$scope', '$http', function($scope, $http){
		//显示列表
        $http({
            url : newsListDataPath,
            method : 'post'
        }).then(function(result){
            $scope.newsList = result.data;
        });

		//加入回收站
		$scope.toRecycle = function(nid){
			if(!nid){
				return;
			}
			$http({
				url : toRecyclePath,
				data :　{
					nid : nid
				},
				method : 'post'
			}).then(function(result){
				switch(result.data){
					case '0':
						alert('删除失败，请重新操作!');
						break;
					case '1':
						alert('删除成功，可到回收站进行查看');
						window.location.reload();
						break;
				}
			});
		};
	}];
});