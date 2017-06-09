/**
 * angular路由模块 
 */

define(['app', 'angularAMD'], function(app, angularAMD){
	return app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/index');
		$stateProvider.state('index', angularAMD.route({
			url : '/index',
			templateUrl : indexPath
		}))
		.state('nodeList', angularAMD.route({
			url : '/nodeList',
			templateUrl : nodeListPath,
            controllerUrl : 'nodeListCtr'
		}))
		.state('addNode', angularAMD.route({
			url : '/addNode/{pid}/{level}',
			templateUrl : addNodePath,
            controllerUrl : 'addNodeCtr'
		}))
		.state('userList', angularAMD.route({
			url : '/userList',
			templateUrl : userListPath,
            controllerUrl : 'userListCtr'
		}))
		.state('addUser', angularAMD.route({
			url : '/addUser',
			templateUrl : addUserPath,
            controllerUrl : 'addUserCtr'
		}))
		.state('addRole', angularAMD.route({
			url : '/addRole',
			templateUrl : addRolePath,
            controllerUrl : 'addRoleCtr'
		}))
		.state('roleList', angularAMD.route({
			url : '/roleList',
			templateUrl : roleListPath,
            controllerUrl : 'roleListCtr'
		}))
		.state('accessList', angularAMD.route({
			url : '/accessList/{rid}',
			templateUrl : accessListPath,
            controllerUrl : 'accessListCtr'
		}))
		.state('publishNews', angularAMD.route({
			url : '/publishNews',
			templateUrl : publishNewsPath,
            controllerUrl : 'publishNewsCtr'
		}))
		.state('newsList', angularAMD.route({
			url : '/newsList',
			templateUrl : newsListPath,
            controllerUrl : 'newsListCtr'
		}))
		.state('recycle', angularAMD.route({
			url : '/recycle',
			templateUrl : recyclePath
		}))
		.state('editNews', angularAMD.route({
			url : '/editNews/{nid}',
			templateUrl : editNewsPath,
            controllerUrl : 'editNewsCtr'
		}))
		.state('fileUp', angularAMD.route({
			url : '/fileUp',
			templateUrl : fileUpPath
		}))
		.state('ztree', angularAMD.route({
			url : '/ztree',
			templateUrl : ztreePath
		}))
		.state('page', angularAMD.route({
			url : '/page/',
			templateUrl : pagePath,
            controllerUrl : 'pageShowCtr'
		}))
	}]);
});