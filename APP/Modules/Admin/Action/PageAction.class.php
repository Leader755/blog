<?php
    /**/
    class PageAction extends CommonAction{
        public function pageShow(){
            $this->display('pageShow');
        }
        public function pageShowData(){
            //每页展示条数
            $num = 10;
            //当前页码
            $currentPage = json_decode(file_get_contents('php://input'), true)['currentPage'];
            //总共条数
            $totalNum = M('user')->query('select count(id) as count from '.C('DB_PREFIX').'user')[0]['count'];
            //总共页数
            $totalPage = ceil($totalNum / $num);
            //用户信息
            $start = ($currentPage-1)*10;
            $userList = M('user')->query('select id,uname,upwd,email from '.C('DB_PREFIX').'user limit '.$start.',10');
            echo json_encode(array(
                'totalNum' => $totalNum,
                'totalPage' => $totalPage,
                'currentPage' => $currentPage,
                'num' => $num,
                'userList' => $userList
            ));
        }
    }