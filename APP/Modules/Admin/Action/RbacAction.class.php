<?php
    
    header('Content-type:text/html;charset="utf8"');
    
    class RbacAction extends CommonAction{
        //用户管理
        public function userList(){
            $this->display('userList');
        }
        public function userListData(){
            $userMessage = M('user')->field(array('id', 'uname', 'email'))->select();
            echo json_encode($userMessage);
        }
        //删除用户
        public function removeUserForm(){
           $removeMessage = json_decode(file_get_contents('php://input'), true);
           if($removeMessage['uid']){
               M('user')->query('delete from '.C('DB_PREFIX').'user where id='.$removeMessage['uid']);
               echo 1;
           }else{
               echo 0;
           }
        }
        //添加用户
        public function addUser(){
            $this->display('addUser');
        }
        //添加用户表单验证
        public function addUserForm(){
            $userMessage = json_decode(file_get_contents('php://input'), true);
            if($userMessage['uname']=='' || $userMessage['upwd']=='' || $userMessage['email']==''){
                echo 0;
                return;
            }
            if(M('user')->data(array('uname'=>$userMessage['uname'], 'upwd'=>md5($userMessage['upwd']), 'email'=>$userMessage['email']))->add()){
                echo 1;
            }else{
                echo 0;
            }
        }
        //为用户分配角色
        public function assignRoleForm(){
            $assignMessage = json_decode(file_get_contents('php://input'), true);
            //先删除用户原来的角色
            M('role_user')->where(array('user_id'=>$assignMessage['uid']))->delete();
            //重新分配角色
            $num = 0;
            foreach($assignMessage['ridArry'] as $v){
                if(M('role_user')->data(array('user_id'=>$assignMessage['uid'], 'role_id'=>$v))->add()){
                    $num+=1;
                }
            }
            if($num==count($assignMessage['ridArry'])){
                echo 1;
            }else{
                echo 0;
            }
        }
        //用户已经关联的角色
        public function roleToUser(){
            $uidMessage = json_decode(file_get_contents('php://input'), true);
            $ridArry = M('role_user')->field(array('role_id'))->where(array('user_id'=>$uidMessage['uid']))->select();
            echo json_encode($ridArry);
        }
        //角色管理
        public function roleList(){
            $this->display('roleList');
        }
        public function roleListData(){
            $roleList = M('role')->field(array('id', 'remark', 'status'))->select();
            echo json_encode($roleList);
        }
        //添加角色
        public function addRole(){
            $this->display('addRole');
        }
        //添加角色表单验证
        public function addRoleForm(){
            $roleMessage = json_decode(file_get_contents('php://input'), true);
            if($roleMessage['name']=='' || $roleMessage['remark']=='' || $roleMessage['status']==''){
                echo 0;
                return;
            }
            if(M('role')->data(array('name'=>$roleMessage['name'], 'remark'=>$roleMessage['remark'], 'status'=>$roleMessage['status']))->add()){
                echo 1;
            }
        }
        //删除角色表单验证
        public function removeRoleForm(){
            $removeMessage = $_POST['rid'];
            if(!IS_AJAX || !$removeMessage){
                echo 0;
                return;
            }
            if(M('role')->where(array('id'=>$removeMessage))->delete() && M('access')->where(array('role_id'=>$removeMessage))->delete()){
                echo 1;
            }
        }
        //节点管理
        public function nodeList(){
            $this->display('nodeList');
        }
        public function nodeListData(){
            $nodeMessage = M('node')->field(array('id', 'remark', 'pid', 'level'))->select();
            echo json_encode(findChild($nodeMessage));
        }
        //添加节点
        public function addNode(){
            $this->display('addNode');
        }
        //添加节点表单验证
        public function addNodeForm(){
            $nodeMessage = json_decode( file_get_contents('php://input'), true );
            if($nodeMessage['name']=='' || $nodeMessage['remark']=='' || $nodeMessage['status']=='' || $nodeMessage['level']==''){
                echo 0;
                return;
            }
            if(M('node')->data($nodeMessage)->add()){
                echo 1;
            }
        }
        //为角色配置权限
        public function accessList(){
            $this->display('accessList');
        }
        public function accessListData(){
            $ridMessage = json_decode(file_get_contents('php://input'), true);
            $myAccess = M('access')->field(array('node_id'))->where(array('role_id'=>$ridMessage['rid']))->select();
            echo json_encode($myAccess);
        }
        //修改角色权限
        public function changeAccessForm(){
            $accessMessage = json_decode(file_get_contents('php://input'), true);
            //先删除本角色原有权限
            M('access')->where(array('role_id'=>$accessMessage['rid']))->delete();
            //重新设置新权限
            $num = 0;
            foreach($accessMessage['accessArry'] as $v){
                if(M('access')->data(array('role_id'=>$accessMessage['rid'], 'node_id'=>$v))->add()){
                    $num+=1;   
                }
            }
            if($num==count($accessMessage['accessArry'])){
                echo 1;
            }else{
                echo 0;
            }
        }
    }