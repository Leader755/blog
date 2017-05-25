/**
 *节点列表angular控制器 
 */
define(['app'], function(app){
	return ['$http', function($http){
		return {
			//节点数据
			nodeData : function(){
				return $http({
					url : nodeListDataPath,
					method : 'post'
				}).then(function(result){
					return result.data;
				});
			}
		}
	}];
});