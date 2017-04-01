<?php
    
    class ZtreeAction extends CommonAction{
        //显示模板
        public function ztreeShow(){
            $this->display('ztreeShow');
        }
        //加载基本数据
        public function ztreeData(){
            $nodeMessage = M('node')->field(array('id', 'remark', 'pid', 'level'))->select();
            echo json_encode(findChild($nodeMessage));
        }
        //添加节点
        public function addNode(){
            $nodeMessage = $_POST;
            if($nid = M('node')->data(array('pid'=>$nodeMessage['id']))->add()){
                echo json_decode($nid);
            }
        }
        //更新节点信息
        public function updateNode(){
            $nodeMessage = $_POST;
            M('node')->query('update '.C('DB_PREFIX').'node set remark="'.$nodeMessage["remark"].'" where id='.$nodeMessage['id']);
            echo '1';
        }
        //删除节点
        public function deleteNode(){
            $nodeMessage = $_POST;
            M('node')->query('delete from '.C('DB_PREFIX').'node where id='.$nodeMessage['id']);
            echo '1';
        }
    }