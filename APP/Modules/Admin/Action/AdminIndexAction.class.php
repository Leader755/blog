<?php
    
    header('Content-type:text/html;charset="utf8"');
    
    class AdminIndexAction extends CommonAction{
        //显示模板
        public function index(){
            $this->display('index');
        }
    }