require.config({
	baseUrl : publicPath+'/util/',
	paths : {
		jquery : '../js/jquery',
		angular : '../js/angular.min',
		uiRouter : '../js/angular-ui-router',
		commonJs : '../js/commonJs',
		addNodeCtr : '../controllers/addNodeController',
		nodeListCtr : '../controllers/nodeListController',
		nodeListSer : '../servers/nodeListServer',
		userListCtr : '../controllers/userListController',
		userListSer : '../servers/userListServer',
		addUserCtr : '../controllers/addUserController',
		addRoleCtr : '../controllers/addRoleController',
		roleListCtr : '../controllers/roleListController',
		accessListCtr : '../controllers/accessListController',
		publishNewsCtr : '../controllers/publishNewsController',
		newsListCtr : '../controllers/newsListController',
		newsListSer : '../servers/newsListServer',
		dateFilter : '../filters/dateFilter',
		editNewsCtr : '../controllers/editNewsController',
		filterFil : '../filters/filter'
	},
	shim : {
		angular : {
			deps : ['jquery'],
			exports : 'angular'
		},
		uiRouter : {
			deps : ['angular'],
			exports : 'ui-router'
		},
		app : {
			deps : ['uiRouter']
		},
		router : {
			deps : ['app']
		}
	}
});

require(['router', 'commonJs'], function(app, commonJs){
	angular.bootstrap(document, ['app']);
	commonJs.init();
});