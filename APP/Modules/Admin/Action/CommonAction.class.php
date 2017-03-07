<?php
    
    header('Content-type:text/html;charset="utf8"');
    
    class CommonAction extends Action{   
        public function _initialize(){
            //判断当前用户是否登录登录状态
            if( !isset( $_SESSION['uname'] ) || !isset( $_SESSION['uid'] ) ){
                $this->redirect('Admin/Login/index');
            }
            //判断用户是否有权限访问此模块
            $not_auth = in_array(MODULE_NAME, explode(',', C('NOT_AUTH_MODULE'))) || in_array(ACTION_NAME, explode(',', C('NOT_AUTH_ACTION')));
            if(C('USER_AUTH_ON') && !$not_auth){
                import('ORG.Util.RBAC');
                RBAC::AccessDecision(GROUP_NAME) || $this->error('没有权限');
            }
        }
    }