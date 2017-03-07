/**
 * 自定义angular过滤器
 */
define(['app'], function(app){
	return app.filter('truncate', function(){
		return function(mobile, num){
			return String(mobile).substr(0, 11-num)+String('*').repeat(num);
		}
	});
});