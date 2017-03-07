<?php
    
    header('Content-type:text/html;charset="utf8"');
    
    class LoginAction extends Action{
        //显示登录界面
        public function index(){
            $this->display('login');
        }
        //登录验证
        public function loginValidate(){
            $loginMessage = array(
                'email' => addslashes($_POST['email']),
                'userPwd' => md5( addslashes( $_POST['pwd'] ) )
            );
            //验证用户登录信息是否正确
            $userMessage = M('user')->query('select id,uname from '.C('DB_PREFIX').'user where email="'.$loginMessage["email"].'" and upwd="'.$loginMessage["userPwd"].'"');
            if($userMessage[0]['id']){
                //将用户信息存入session
                $_SESSION['uid'] = $userMessage[0]['id'];
                $_SESSION['uname'] = $userMessage[0]['uname'];
                //判断是否是超级管理员
                if($_SESSION['uname']==C('RBAC_SUPERADMIN')){
                    $_SESSION[C('ADMIN_AUTH_KEY')] = true;
                }
                //载入RBAC类
                import('ORG.Util.RBAC');
                //读取用户权限
                RBAC::saveAccessList();
                echo '1';
            }else{
                echo '0';
            }
        }
        //退出
        public function loginOut(){
            $loginOutMessage = addslashes($_POST['loginOut']);
            if($loginOutMessage=='yes'){
                session_unset();
                session_destroy();
                echo '1';
            }
        }
    }