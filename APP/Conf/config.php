<?php

    return array(
    	//配置数据库
    	'DB_HOST' => 'localhost',
        'DB_NAME' => 'blog',
        'DB_USER' => 'root',
        'DB_PWD' => '',
        'DB_PREFIX' => 'blog_',
        //独立分组配置
        'APP_GROUP_MODE' => 1,
        'APP_GROUP_PATH' => 'Modules',
        //项目分组
        'APP_GROUP_LIST' => 'Admin,Index',
        'DEFAULT_GROUP' => 'Admin',
        //配置自定义路径
        'TMPL_PARSE_STRING' => array(
            '__PUBLIC__' => __ROOT__.'/'.APP_NAME.'/Public'
        ),
        //浏览器上显示sql调试信息和控制台信息：
        'SHOW_PAGE_TRACE'=>true,
        //url路径
        'URL_MODEL' => 1,
        //session存储
        'SESSION_TYPE' => 'Db',
        //指定超级管理员用户名称：
        'RBAC_SUPERADMIN'=>'admin',
        //超级管理员识别
        'ADMIN_AUTH_KEY'=>'superadmin',
        //是否开启权限验证
        'USER_AUTH_ON'=>true,
        //验证类型（1、登录验证   2、实时验证）：
        'USER_AUTH_TYPE'=>1,
        //用户认证识别号（登录之后从session中获取）：
        'USER_AUTH_KEY'=>'uid',
        //无需权限验证的控制器：
        'NOT_AUTH_MODULE'=>'Index',//自定义
        //无需权限验证的方法：
        'NOT_AUTH_ACTION'=>'index',//自定义
        //角色表
        'RBAC_ROLE_TABLE'=>'blog_role',
        //权限表
        'RBAC_ACCESS_TABLE'=>'blog_access',
        //节点表
        'RBAC_NODE_TABLE'=>'blog_node',
        //角色和用户的中间表
        'RBAC_USER_TABLE'=>'blog_role_user',//注意这个不是用户表
    );
