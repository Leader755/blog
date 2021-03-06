<?php if (!defined('THINK_PATH')) exit();?><link rel="stylesheet" type="text/css" href="__PUBLIC__/css/zTreeStyle.css" /><link rel="stylesheet" type="text/css" href="__PUBLIC__/css/zTree.css" /><button id="btn">console打印被选中的节点的ID</button><button id="addFistLevel" onclick="addFirstNode();">添加一级节点</button><ul id="treeDemo" class="ztree"></ul><!--zTree功能js--><script type="text/javascript" src="__PUBLIC__/js/jquery.ztree.core.min.js"></script><!--ztrezTreee的核心js--><script type="text/javascript" src="__PUBLIC__/js/jquery.ztree.core-3.5.js"></script><!--zTree的复选框功能js--><script type="text/javascript" src="__PUBLIC__/js/jquery.ztree.excheck-3.5.js"></script><!-- zTree编辑功能js --><script type="text/javascript" src="__PUBLIC__/js/jquery.ztree.exedit-3.5.js"></script><!-- zTree配置 --><script type="text/javascript" src="__PUBLIC__/js/ztreeOptions.js"></script><script type="text/javascript">	var btn = document.getElementById('btn');
	
	//打印被选中ID的数组
	btn.onclick = nodeArry;
	function nodeArry(){
		var treeObj = $.fn.zTree.getZTreeObj("treeDemo"),
			nodes = treeObj.getChangeCheckedNodes(),
			nodesLen = nodes.length;
		for(var i=0; i<nodesLen; i++){
			console.log(nodes[i].id);
		}
	}
	
	//节点树预加载
	(function nodeShow(){
		$.ajax({
			url : '<?php echo U("Admin/Ztree/ztreeData");?>',
			success : function(data){
				var data = JSON.parse(data);
				$.fn.zTree.init($("#treeDemo"), setting, data);
			}
		});
	})();
	
	//添加一级节点
	function addFirstNode(treeId, treeNode){
		$.ajax({
			url : '<?php echo U("Admin/Ztree/addNode");?>',
			type : 'post',
			data : {
				id : 0
			},
			success : function(message){
				if(message){
					alert('添加成功');
					var zTree = $.fn.zTree.getZTreeObj("treeDemo");
					zTree.addNodes(treeNode, {id:message, pId:0, name:"new node"});
				}
			}
		});
	}
	
	//添加节点
	function addNode(treeId, treeNode){
		$.ajax({
			url : '<?php echo U("Admin/Ztree/addNode");?>',
			type : 'post',
			data : {
				id : treeNode.id
			},
			success : function(message){
				if(message == '1'){
					alert('添加成功');
				}
			}
		});
	}
	
	//更新节点
	function updateNode(treeId, treeNode){
		$.ajax({
			url : '<?php echo U("Admin/Ztree/updateNode");?>',
			type : 'post',
			data : {
				id : treeNode.id,
				remark : treeNode.remark
			},
			success : function(message){
				if(message == '1'){
					alert('修改成功');
				}
			}
		});
	}
	
	//删除节点
	function deleteNode(treeId, treeNode){
		$.ajax({
			url : '<?php echo U("Admin/Ztree/deleteNode");?>',
			type : 'post',
			data : {
				id : treeNode.id,
			},
			success : function(message){
				if(message == '1'){
					alert('删除成功');
				}
			}
		});
	}
</script>