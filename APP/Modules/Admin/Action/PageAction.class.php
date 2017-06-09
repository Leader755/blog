<?php
    /**/
    class PageAction extends CommonAction{
        public function pageShow(){
            $this->display('pageShow');
        }
        public function pageShowData(){
            $userInfo = M('user')->query('select * from '.C('DB_PREFIX').'user');
            echo json_encode($userInfo);
        }
    }