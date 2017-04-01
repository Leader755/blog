/**
 *ztree插件配置 
 */
//zTree配置
var setting = {
    view: {
       	addHoverDom: addHoverDom,
		removeHoverDom: removeHoverDom,
		selectedMulti: false,
		showIcon : true,
		showLine : true
	},
	edit: {
		enable: true,
		//给节点额外增加属性来控制“重命名”、“删除”图标的显示或隐藏
		showRenameBtn:true,
		showRemoveBtn:true
	},
	check : {
		enable : true,
		chkboxType : { "Y" : "ps", "N" : "ps" }
	},
	data: {
		simpleData: {
			enable: true
		},
		key : {
			checked : true,
			children : 'child',
			name : 'remark'
			}
		},
		callback: {
			beforeEditName: beforeEditName,
			beforeRemove: beforeRemove,
			beforeRename: beforeRename,
			onRemove: onRemove,
			onRename: onRename
		}
	};      
	var log, className = "dark";
		function beforeDrag(treeId, treeNodes) {
		return false;
	}
	//编辑节点
	function beforeEditName(treeId, treeNode) {
		className = (className === "dark" ? "":"dark");
	showLog("[ "+getTime()+" beforeEditName ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	var zTree = $.fn.zTree.getZTreeObj("treeDemo");
		zTree.selectNode(treeNode);
	}
	//删除节点
	function beforeRemove(treeId, treeNode) {
		className = (className === "dark" ? "":"dark");
	showLog("[ "+getTime()+" beforeRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	var zTree = $.fn.zTree.getZTreeObj("treeDemo");
	zTree.selectNode(treeNode);
	return confirm("确认删除【"+treeNode.name+"】吗？");
	}
	//鼠标滑过显示添加、编辑、删除按钮
	function onRemove(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
		deleteNode(treeId, treeNode);
	}
	//重新编辑之后，判断节点内容是否为空
	function beforeRename(treeId, treeNode, newName) {
		className = (className === "dark" ? "":"dark");
	showLog("[ "+getTime()+" beforeRename ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	if(newName.length==0) {
		alert("知识点名称不能为空");
		var zTree = $.fn.zTree.getZTreeObj("treeDemo");
			setTimeout(function(){zTree.editName(treeNode)}, 10);
			return false;
		}
		return true;
	}
	function onRename(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onRename ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
		updateNode(treeId, treeNode);
	}
	function showLog(str) {
		if (!log) log = $("#log");
		log.append("<li class='"+className+"'>"+str+"</li>");
	if(log.children("li").length > 8) {
		log.get(0).removeChild(log.children("li")[0]);
		}
	}
	function getTime() {
		var now= new Date(),
		h=now.getHours(),
		m=now.getMinutes(),
		s=now.getSeconds(),
		ms=now.getMilliseconds();
		return (h+":"+m+":"+s+ " " +ms);
	}
	//是否显示编辑按钮
	function  showRenameBtn(treeId, treeNode){
		//获取节点所配置的noEditBtn属性值
		if(treeNode.noEditBtn != undefined && treeNode.noEditBtn){
			return false;
		}else{
			return true;
		}
	}
	//是否显示删除按钮
	function showRemoveBtn(treeId, treeNode){
		//获取节点所配置的noRemoveBtn属性值
		if(treeNode.noRemoveBtn != undefined && treeNode.noRemoveBtn){
			return false;
		}else{
			return true;
		}
	}
	//在addHoverDom中判断第0级的节点不要显示“新增”按钮(最后一级没有新增按钮)
	var newCount = 1;
	var newCreateId = 0;
	function addHoverDom(treeId, treeNode) {
		if(treeNode.level >=2){
			return false;
		}else{
			//给节点添加"新增"按钮
		var sObj = $("#" + treeNode.tId + "_span");
		if (treeNode.editNameFlag || $("#addBtn_"+treeNode.id).length>0) return;
		var addStr = "<span class='button add' id='addBtn_" + treeNode.id
		+ "' title='add node' onfocus='this.blur();'></span>";
		sObj.after(addStr);
		var btn = $("#addBtn_"+treeNode.id);
		if (btn) btn.bind("click", function(){
			var zTree = $.fn.zTree.getZTreeObj("treeDemo");
			var newId = newCreateId;
			addNode(treeId, treeNode,null);
			var newId = newCreateId;
			zTree.addNodes(treeNode, {id:newId, pId:treeNode.id, name:"new node" + (newCount)});
				return false;
			});
		}
	};
	//点击增加节点按钮
	function toAdd(){
		
	}
	function removeHoverDom(treeId, treeNode) {
		$("#addBtn_"+treeNode.id).unbind().remove();
	};
	function selectAll() {
		var zTree = $.fn.zTree.getZTreeObj("treeDemo");
	zTree.setting.edit.editNameSelectAll =  $("#selectAll").attr("checked");
	}