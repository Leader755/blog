<?php
    
    //header('Content-type:text/html;charset="utf8"');
    
    class NewsAction extends CommonAction{
        //发布新闻
        public function publishNews(){
            $this->display('publishNews');
        }
        //上传图片
        public function uploadImages(){
            //接收图片信息
            $imageMessage = $_FILES['file'];
            //验证是否是一张图片
            $typeArry = array('jpg', 'jpeg', 'png', 'gif');
            if(!in_array(substr($imageMessage['type'], (strrpos($imageMessage['type'], '/')+1)), $typeArry)){
                return;
            }
            //判断用于存放图片的文件夹是否存在,如果不存在，则自动创建
            $dirname = './APP/Public/uploads/images/';
            if(is_dir($filename)){
                mkdir($dirname, 0777, 1);
            }
            //判断是否是上传文件
            if(is_uploaded_file($imageMessage['tmp_name'])){
                //将文件移动到本地服务器对应的文件夹下边
                $imagePath = $dirname.$imageMessage['name'];
                if(move_uploaded_file($imageMessage['tmp_name'], iconv('utf-8', 'gb2312', $imagePath))){
                    $response = new StdClass;
                    $response->link = 'http://localhost/blog/APP/Public/uploads/images/'.$imageMessage['name'];
                    echo stripslashes(json_encode($response));
                }
            }
        }
        //发布新闻表单信息处理
        public function publishNewsForm(){
            //从前端获取数据
            $newsMessage = json_decode(file_get_contents('php://input'), true);
            $title = $newsMessage['title'];
            $content = $newsMessage['content'];
            //验证数据是否齐全
            if($title==''|| $content==''){
                echo 2;
                return;
            }
            $nowTime = time();
            //写入数据库
            if(M('news')->data(array('title'=>$title, 'content'=>$content, 'time'=>$nowTime))->add()){
                echo 1;
            }else{
                echo 0;
            }
        }
        //新闻列表
        public function newsList(){
            $this->display('newsList');
        }
        public function newsListData(){
            $newsList = M('news')->field(array('id', 'title', 'time', 'click'))->where(array('status'=>1))->select();
            echo json_encode($newsList);
        }
        //编辑新闻
        public function editNews(){
            $this->display('editNews');
        }
        public function editNewsData(){
            $nidMessage = json_decode(file_get_contents('php://input'),true);
            $newsData = M('news')->field(array('id', 'title', 'content'))->where(array('id'=>$nidMessage['nid']))->select();
            echo json_encode($newsData);
        }
        //加入回收站
        public function toRecycle(){
            $nidMessage = json_decode(file_get_contents('php://input'), true);
            M('news')->query('update '.C('DB_PREFIX').'news set status=0 where id='.$nidMessage['nid']);
            echo 1;
        }
        //回收站 
        public function recycle(){
            $recycleMessage = M('news')->field(array('id', 'title', 'time', 'click'))->where(array('status'=>0))->select();
            $this->assign('recycleList', $recycleMessage);
            $this->display('recycle');
        }
        //文章还原
        public function restore(){
            if(!IS_AJAX){
                echo 0;
                return;
            }
            $restoreMessage = $_POST['nid'];
            M('news')->query('update '.C('DB_PREFIX').'news set status=1 where id='.$restoreMessage);
            echo 1;
        }
        //彻底删除文章
        public function removeNews(){
            if(!IS_AJAX){
                echo 0;
                return;
            }
            $restoreMessage = $_POST['nid'];
            M('news')->query('delete from '.C('DB_PREFIX').'news where id='.$restoreMessage);
            echo 1;
        }
    }