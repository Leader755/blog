/**
 * angular路由模块 
 */
var routerArry = ['app', 'addNodeCtr', 'nodeListCtr', 'userListCtr', 'addUserCtr', 'addRoleCtr', 'roleListCtr', 'accessListCtr', 'publishNewsCtr', 'newsListCtr', 'editNewsCtr', 'pageShowCtr'];
define(routerArry, function(app){
	return app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/index');
		$stateProvider.state('index', {
			url : '/index',
			templateUrl : indexPath
		})
		.state('nodeList', {
			url : '/nodeList',
			templateUrl : nodeListPath,
			controller : 'nodeListCtr'
		})
		.state('addNode', {
			url : '/addNode/{pid}/{level}',
			templateUrl : addNodePath,
			controller : 'addNodeCtr'
		})
		.state('userList', {
			url : '/userList',
			templateUrl : userListPath,
			controller : 'userListCtr'
		})
		.state('addUser', {
			url : '/addUser',
			templateUrl : addUserPath,
			controller : 'addUserCtr'
		})
		.state('addRole', {
			url : '/addRole',
			templateUrl : addRolePath,
			controller : 'addRoleCtr'
		})
		.state('roleList', {
			url : '/roleList',
			templateUrl : roleListPath,
			controller : 'roleListCtr'
		})
		.state('accessList', {
			url : '/accessList/{rid}',
			templateUrl : accessListPath,
			controller : 'accessListCtr'
		})
		.state('publishNews', {
			url : '/publishNews',
			templateUrl : publishNewsPath,
			controller : 'publishNewsCtr'
		})
		.state('newsList', {
			url : '/newsList',
			templateUrl : newsListPath,
			controller : 'newsListCtr'
		})
		.state('recycle', {
			url : '/recycle',
			templateUrl : recyclePath
		})
		.state('editNews', {
			url : '/editNews/{nid}',
			templateUrl : editNewsPath,
			controller : 'editNewsCtr'
		})
		.state('fileUp', {
			url : '/fileUp',
			templateUrl : fileUpPath
		})
		.state('ztree', {
			url : '/ztree',
			templateUrl : ztreePath
		})
		.state('page', {
			url : '/page/{currentPage}',
			templateUrl : pagePath,
			controller : 'pageShowCtr'
		})
	}]);
});