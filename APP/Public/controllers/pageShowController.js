/**
 * 翻页测试angular控制器
 */

define(['app'], function(app){
    return ['$scope', '$http', function($scope, $http){
        //当前第几页
        $scope.currentPage = 1;
        //每页记录条数
        $scope.pageNum = 10;

        //用户列表
        $scope.userList = function(){
            $http({
                url : pageShowDataPath,
                method : 'post'
            }).then(function(result){
                $scope.userInfo = result.data;
                //将数据作为字符串存储到本地
                window.localStorage.userInfo = JSON.stringify($scope.userInfo);
                //总共记录条数
                $scope.totalNum = $scope.userInfo.length;
                //总共页数
                $scope.totalPage = Math.ceil( $scope.totalNum / $scope.pageNum );
                //每页展示的数据
                $scope.userData = JSON.parse(window.localStorage.userInfo).splice(($scope.currentPage-1)*10, 10);

                $scope.checkedQuestion();
            });
        };
        $scope.userList();

        //加入或移除试卷
        $scope.questionIdArry = window.localStorage.questionIdStr ? JSON.parse(window.localStorage.questionIdStr) : [];
        $scope.mark = function(_index, id, status){
            if(status == '0' || status == undefined){
                $scope.questionIdArry.push(id);
                window.localStorage.questionIdStr = JSON.stringify($scope.questionIdArry);
                return;
            }
            if(status == '1'){
                var questionIdArryLen = $scope.questionIdArry.length;
                for(var i=0; i<questionIdArryLen; i++){
                    if($scope.questionIdArry[i] == id){
                        $scope.questionIdArry.splice(i, 1);
                        window.localStorage.questionIdStr = JSON.stringify($scope.questionIdArry);
                        break;
                    }
                }
            }
        };

        //加载更多
        $scope.moreBtn = '加载更多';
        $scope.more = function(){
            if($scope.currentPage < $scope.totalPage){
                $scope.currentPage += 1;
                $scope.userData = JSON.parse(window.localStorage.userInfo).splice(0, $scope.currentPage*10);
            }else{
                $scope.moreBtn = '亲，暂时只有这么多了！';
                return false;
            }
            $scope.checkedQuestion();
        };

        //选中已经加入购物车的试题
        $scope.checkedQuestion = function(){
            if(!window.localStorage.questionIdStr){
                return false;
            }
            var userDataLen = $scope.userData.length;
            var questionIdStrLen = JSON.parse(window.localStorage.questionIdStr).length;
            for(var j=0; j<userDataLen; j++){
                for(var k=0; k<questionIdStrLen; k++){
                    if($scope.userData[j].id== JSON.parse(window.localStorage.questionIdStr)[k]){
                        $scope.userData[j].status = '1';
                        break;
                    }
                }
            }
        };

        //查看试卷中的试题
        $scope.showPaper = function(){
            console.log(JSON.parse(window.localStorage.questionIdStr));
        };

        //翻页
        $scope.page = function(mark){
            switch(mark){
                case 'index':
                    $scope.currentPage = 1;
                    break;
                case 'prev':
                    $scope.currentPage -= 1;
                    break;
                case 'next':
                    $scope.currentPage += 1;
                    break;
                case 'end':
                    $scope.currentPage = $scope.totalPage;
                    break;
                default:
                    alert('非法操作');
                    return;
            }
            $scope.userData = JSON.parse(window.localStorage.userInfo).splice(($scope.currentPage-1)*10, 10);
            $scope.checkedQuestion();
        };
    }];
});