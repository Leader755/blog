/**
 * 公共js部分 
 */
define(['jquery'], function($){
	return {
		mark : false,
		//初始化执行
		init : function(){
			this.switchWidth();
			this.autoWidth();
			this.flexible();
			this.personalList();
			this.loginOut();
		},
		//宽度变化监测
		switchWidth : function(){
			window.resize = this.autoWidth;
			this.autoWidth();
		},
		autoWidth : function(){
			this.mark = window.innerWidth > 1000 ? true : false; 
		},
		//点击按钮，左侧菜单伸缩
		flexible : function(){
			$('.navBar').click(function(){
				var $wrapLeft = $('.wrapLeft').eq(0),
					$header = $('.header').eq(0),
					$wrapRight = $('.wrapRight').eq(0);
				if(this.mark){
					$wrapLeft.animate({left:'-230px'}, 'slow');
					$header.animate({left:'0'}, 'slow');
					$wrapRight.animate({marginLeft:'0px'}, 'slow');
					this.mark = !this.mark;
				}else{
					$wrapLeft.animate({left:'0'}, 'slow');
					$header.animate({left:'230px'}, 'slow');
					$wrapRight.animate({marginLeft:'230px'}, 'slow');
					this.mark = !this.mark;
				}
			});
		},
		//右上角个人信息显示或隐藏
		personalList : function(){
			$('.menuBtn').click(function(){
				var $menuList = $('.menuList').eq(0);
				arguments.callee.mark == undefined ? false : true;
				arguments.callee.mark = !arguments.callee.mark;
				if(arguments.callee.mark){
					$menuList.slideDown();
				}else{
					$menuList.slideUp();
				}
			});
		},
		//退出登录
		loginOut : function(){
			$('#loginOut').click(function(){
				$.ajax({
					url : loginOutPath,
					type : 'post',
					dataType : 'json',
					data : {
						loginOut : 'yes'
					},
					success : function(result){
						if(result=='1'){
							alert('退出成功');
							window.location.href = loginPath;
						}
					}
				});
			});
		}
	}
});