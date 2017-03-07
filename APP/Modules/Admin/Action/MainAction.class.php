<?php

    header('Content-type:text/html;charset="utf8"');
    
    class MainAction extends CommonAction{
        //显示主框架模板
        public function index(){
            $this->assign('uname', $_SESSION['uname']);
            $this->display('main');
        }
    }