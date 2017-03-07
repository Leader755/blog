/**
 * 新闻列表angular服务
 */
define(['app'], function(app){
	return app.factory('newsListSer', ['$http', function($http){
		return {
			newsData : function(){
				return $http({
					url : newsListDataPath
				}).then(function(result){
					return result.data;
				});
			}
		}
	}]);
});