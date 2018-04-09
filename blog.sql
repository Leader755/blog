-- MySQL dump 10.13  Distrib 5.6.17, for Win32 (x86)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	5.6.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog_access`
--

DROP TABLE IF EXISTS `blog_access`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_access` (
  `role_id` smallint(6) unsigned NOT NULL,
  `node_id` smallint(6) unsigned NOT NULL,
  `level` tinyint(1) NOT NULL,
  `module` varchar(50) DEFAULT NULL,
  KEY `groupId` (`role_id`),
  KEY `nodeId` (`node_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_access`
--

LOCK TABLES `blog_access` WRITE;
/*!40000 ALTER TABLE `blog_access` DISABLE KEYS */;
INSERT INTO `blog_access` VALUES (9,55,0,NULL),(9,54,0,NULL),(9,43,0,NULL),(9,42,0,NULL),(9,41,0,NULL),(9,40,0,NULL),(9,39,0,NULL),(9,38,0,NULL),(9,37,0,NULL),(9,36,0,NULL),(9,35,0,NULL),(9,34,0,NULL),(9,33,0,NULL),(9,32,0,NULL),(9,31,0,NULL),(9,30,0,NULL),(9,29,0,NULL),(9,28,0,NULL),(9,27,0,NULL),(9,26,0,NULL),(9,25,0,NULL),(2,54,0,NULL),(2,53,0,NULL),(2,52,0,NULL),(2,51,0,NULL),(2,50,0,NULL),(2,49,0,NULL),(2,48,0,NULL),(2,47,0,NULL),(2,46,0,NULL),(2,45,0,NULL),(2,44,0,NULL),(2,23,0,NULL),(9,24,0,NULL),(9,23,0,NULL),(2,55,0,NULL);
/*!40000 ALTER TABLE `blog_access` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_file`
--

DROP TABLE IF EXISTS `blog_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_file` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `filename` varchar(50) DEFAULT NULL,
  `filepath` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_file`
--

LOCK TABLES `blog_file` WRITE;
/*!40000 ALTER TABLE `blog_file` DISABLE KEYS */;
INSERT INTO `blog_file` VALUES (28,'[HTML5.CSS3网页布局和样式精粹].张亚飞.扫描版.pdf','files-1492265487952.pdf'),(29,'《编写高质量代码 改善JavaScript程序的188个建议》.(成林).pdf','files-1492265488438.pdf'),(30,'《HTML5从入门到精通》中文学习教程.pdf','files-1492265488425.pdf'),(31,'【图灵】响应式Web设计：HTML5和CSS3实战.pdf','files-1492265488523.pdf'),(32,'[HTML5.CSS3网页布局和样式精粹].张亚飞.扫描版.pdf','files-1492265538467.pdf'),(33,'《HTML5从入门到精通》中文学习教程.pdf','files-1492265539204.pdf'),(34,'《编写高质量代码 改善JavaScript程序的188个建议》.(成林).pdf','files-1492265539228.pdf'),(35,'【图灵】响应式Web设计：HTML5和CSS3实战.pdf','files-1492265539355.pdf'),(36,'1 后盾向军微信开发宝典之微信介绍及各种公众号区别.mp4','files-1492265660866.mp4'),(37,'2 后盾向军微信开发宝典之项目代码与视频介绍.mp4','files-1492265673474.mp4'),(38,'建设合同.docx','files-1492265714177.docx'),(39,'汕头i尚网V1.0.xmind','files-1492265760719.xmind'),(40,'搜索引擎如何判断页面价值-2.jpeg','files-1492265815480.jpeg'),(41,'搜索引擎如何判断页面价值-2.jpeg','files-1492265870195.jpeg'),(42,'搜索引擎如何判断页面价值-2.jpeg','files-1492265878535.jpeg'),(43,'搜索引擎如何判断页面价值-2.jpeg','files-1492265924733.jpeg'),(44,'js-loader配置项.jpg','files-1492351890411.jpg'),(45,'2017年广东旅游职教集团年会暨现代学徒制汇报研讨会2017-4-13.docx','files-1492352153861.docx'),(46,'酒店参与现代学徒制的研究2017-4-13.docx','files-1492352153861.docx'),(47,'现代学徒制会议记录2017-4-13.docx','files-1492352153862.docx'),(48,'2017年广东旅游职教集团年会暨现代学徒制汇报研讨会2017-4-13.docx','files-1492352177885.docx'),(49,'酒店参与现代学徒制的研究2017-4-13.docx','files-1492352177885.docx'),(50,'现代学徒制会议记录2017-4-13.docx','files-1492352177887.docx'),(51,'AR•3D多功能教学地球仪(V1.0).mp4','files-1492352345394.mp4'),(52,'js-loader配置项.jpg','files-1492352374463.jpg');
/*!40000 ALTER TABLE `blog_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_news`
--

DROP TABLE IF EXISTS `blog_news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_news` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) DEFAULT NULL,
  `content` text,
  `time` varchar(255) DEFAULT NULL,
  `click` int(10) DEFAULT '0',
  `status` int(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_news`
--

LOCK TABLES `blog_news` WRITE;
/*!40000 ALTER TABLE `blog_news` DISABLE KEYS */;
INSERT INTO `blog_news` VALUES (1,'这是我发布的第一篇文章','<p>这是我发布的第一篇文章这是我发布的第一篇文章这是我发布的第一篇文章这是我发布的第一篇文章这是我发布的第一篇文章.</p><p><br></p><p>这是我发布的第一篇文章这是我发布的第一篇文章这是我发布的第一篇文章这是我发布的第一篇文章这是我发布的第一篇文章.</p><p><br></p><p>这是我发布的第一篇文章这是我发布的第一篇文章这是我发布的第一篇文章这是我发布的第一篇文章这是我发布的第一篇文章.</p><p><br></p><p><img class=\"fr-fil\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"http://localhost/blog/APP/Public/uploads/images/1.jpg\" width=\"300\"></p><p><br></p>','1488705005',0,1),(2,'这是我发布的第二篇文章','<p>这是我发布的第二篇文章这是我发布的第二篇文章这是我发布的第二篇文章。<br></p>','1488705261',0,1),(4,'今天是2017年3月6日','<p>今天是2017年3月6日今天是2017年3月6日今天是2017年3月6日今天是2017年3月6日今天是2017年3月6日今天是2017年3月6日</p><p><img class=\"fr-fil\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"http://localhost/blog/APP/Public/uploads/images/DSC_3626.JPG\" width=\"300\"></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>今天是2017年3月6日今天是2017年3月6日今天是2017年3月6日今天是2017年3月6日今天是2017年3月6日今天是2017年3月6日</p><p><img class=\"fr-fil\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"http://localhost/blog/APP/Public/uploads/images/235038-140R30G91651.jpg\" width=\"300\"></p><p><br></p>','1488762477',0,0),(5,'dsfgsdfgsdfg','<p>sfsdfsdf</p><p><span data-fr-verified=\"true\" class=\"f-img-wrap fr-fil\"><span data-fr-verified=\"true\" class=\"f-img-editor fr-fil\"><img class=\"\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"http://www.0351zhuangxiu.com/uploads/images/123.jpg\" width=\"300\"><span data-fr-verified=\"true\" class=\"f-img-handle f-h-ne\"></span><span data-fr-verified=\"true\" class=\"f-img-handle f-h-se\"></span><span data-fr-verified=\"true\" class=\"f-img-handle f-h-sw\"></span><span data-fr-verified=\"true\" class=\"f-img-handle f-h-nw\"></span></span></span></p><p><br></p><p>sdfsdfsdf</p>','1489568496',0,1),(6,'今天是2017-4-1','<p>今天是2017-4-1今天是2017-4-1今天是2017-4-1今天是2017-4-1。<br></p><p><img class=\"fr-fil\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"http://localhost/blog/APP/Public/uploads/images/tx.jpg\" width=\"300\"></p><p><br></p><p><br></p><p><br></p>','1491018037',0,0);
/*!40000 ALTER TABLE `blog_news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_node`
--

DROP TABLE IF EXISTS `blog_node`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_node` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `remark` varchar(255) DEFAULT NULL,
  `sort` smallint(6) unsigned DEFAULT NULL,
  `pid` smallint(6) unsigned NOT NULL,
  `level` tinyint(1) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `level` (`level`),
  KEY `pid` (`pid`),
  KEY `status` (`status`),
  KEY `name` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=94 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_node`
--

LOCK TABLES `blog_node` WRITE;
/*!40000 ALTER TABLE `blog_node` DISABLE KEYS */;
INSERT INTO `blog_node` VALUES (23,'Admin',NULL,1,'后台应用',NULL,0,1),(24,'Rbac',NULL,1,'权限管理',NULL,23,2),(25,'userList',NULL,1,'用户管理',NULL,24,3),(26,'userListData',NULL,1,'提取用户数据',NULL,24,3),(27,'removeUserForm',NULL,1,'删除用户表单处理',NULL,24,3),(28,'addUser',NULL,1,'添加用户',NULL,24,3),(29,'addUserForm',NULL,1,'添加用户表单验证',NULL,24,3),(30,'assignRoleForm',NULL,1,'为用户分配角色',NULL,24,3),(31,'roleToUser',NULL,1,'查看用户已经关联的角色',NULL,24,3),(32,'roleList',NULL,1,'角色管理',NULL,24,3),(33,'roleListData',NULL,1,'获取角色数据',NULL,24,3),(34,'addRole',NULL,1,'添加角色',NULL,24,3),(35,'addRoleForm',NULL,1,'添加角色表单验证',NULL,24,3),(36,'removeRoleForm',NULL,1,'删除角色表单验证',NULL,24,3),(37,'nodeList',NULL,1,'节点管理',NULL,24,3),(38,'nodeListData',NULL,1,'节点管理数据',NULL,24,3),(39,'addNode',NULL,1,'添加节点',NULL,24,3),(40,'addNodeForm',NULL,1,'添加节点表单验证',NULL,24,3),(41,'accessList',NULL,1,'为角色配置权限',NULL,24,3),(42,'accessListData',NULL,1,'为角色配置权限数据',NULL,24,3),(43,'changeAccessForm',NULL,1,'修改角色权限',NULL,24,3),(44,'News',NULL,1,'新闻中心',NULL,23,2),(45,'publishNews',NULL,1,'发布新闻',NULL,44,3),(46,'uploadImages',NULL,1,'上传图片',NULL,44,3),(47,'publishNewsForm',NULL,1,'发布新闻表单处理',NULL,44,3),(48,'newsList',NULL,1,'新闻列表',NULL,44,3),(49,'newsListData',NULL,1,'新闻列表数据',NULL,44,3),(50,'toRecycle',NULL,1,'加入回收站',NULL,44,3),(51,'recycle',NULL,1,'回收站',NULL,44,3),(52,'restore',NULL,1,'文章还原',NULL,44,3),(53,'removeNews',NULL,1,'彻底删除文章',NULL,44,3),(54,'Main',NULL,1,'主框架',NULL,23,2),(55,'AdminIndex',NULL,1,'后台首页',NULL,23,2),(88,'',NULL,0,'szfvsfdvdszv',NULL,0,0),(89,'',NULL,0,'mmmmmmmmmmmmm',NULL,88,0);
/*!40000 ALTER TABLE `blog_node` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_role`
--

DROP TABLE IF EXISTS `blog_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_role` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `pid` smallint(6) DEFAULT NULL,
  `status` tinyint(1) unsigned DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pid` (`pid`),
  KEY `status` (`status`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_role`
--

LOCK TABLES `blog_role` WRITE;
/*!40000 ALTER TABLE `blog_role` DISABLE KEYS */;
INSERT INTO `blog_role` VALUES (2,'editor',NULL,1,'文章编辑'),(8,'linker',NULL,1,'友链专员'),(6,'original',NULL,1,'普通管理员'),(9,'accesser',NULL,1,'权限管理员');
/*!40000 ALTER TABLE `blog_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_role_user`
--

DROP TABLE IF EXISTS `blog_role_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_role_user` (
  `role_id` mediumint(9) unsigned DEFAULT NULL,
  `user_id` char(32) DEFAULT NULL,
  KEY `group_id` (`role_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_role_user`
--

LOCK TABLES `blog_role_user` WRITE;
/*!40000 ALTER TABLE `blog_role_user` DISABLE KEYS */;
INSERT INTO `blog_role_user` VALUES (2,'6'),(9,'7');
/*!40000 ALTER TABLE `blog_role_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_session`
--

DROP TABLE IF EXISTS `blog_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_session` (
  `session_id` varchar(255) NOT NULL,
  `session_expire` int(11) NOT NULL,
  `session_data` blob,
  UNIQUE KEY `session_id` (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_session`
--

LOCK TABLES `blog_session` WRITE;
/*!40000 ALTER TABLE `blog_session` DISABLE KEYS */;
INSERT INTO `blog_session` VALUES ('ukac6fcs1cq42ls46u8h66v0a5',1502723005,'');
/*!40000 ALTER TABLE `blog_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_user`
--

DROP TABLE IF EXISTS `blog_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `uname` varchar(30) DEFAULT NULL,
  `upwd` varchar(255) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_user`
--

LOCK TABLES `blog_user` WRITE;
/*!40000 ALTER TABLE `blog_user` DISABLE KEYS */;
INSERT INTO `blog_user` VALUES (1,'admin','d1424999e19346429b60ff3fa3329dfe','1047832475@qq.com'),(6,'zhangsan','d1424999e19346429b60ff3fa3329dfe','1@qq.com'),(7,'lisi','d1424999e19346429b60ff3fa3329dfe','2@qq.com'),(8,'sdfg','202cb962ac59075b964b07152d234b70','1@qq.com'),(9,'sdfgsdf','202cb962ac59075b964b07152d234b70','2@qq.com'),(10,'dtg','202cb962ac59075b964b07152d234b70','2@qq.com'),(11,'ccfd23','202cb962ac59075b964b07152d234b70','2@qq.com'),(12,'psdifik123','202cb962ac59075b964b07152d234b70','2@qq.com'),(13,'新用户','202cb962ac59075b964b07152d234b70','2@qq.com'),(14,'新用户1','202cb962ac59075b964b07152d234b70','2@qq.com'),(15,'新用户2','202cb962ac59075b964b07152d234b70','2@qq.com'),(16,'新用户3','202cb962ac59075b964b07152d234b70','2@qq.com'),(17,'新用户4','202cb962ac59075b964b07152d234b70','2@qq.com'),(18,'新用户5','202cb962ac59075b964b07152d234b70','2@qq.com'),(19,'asfasdf','asdfasdf',NULL),(20,'asdfasdf','asdfasdf',NULL),(21,'我的梦','张靓颖',NULL),(22,'undefined','undefined',NULL),(23,'asfasdf','asdfasdf',NULL),(24,'undefined','undefined',NULL),(25,'undefined','undefined',NULL),(26,'gfg','hj',NULL),(27,'222','222',NULL),(28,'222','222',NULL),(29,'sdds','sdds',NULL),(30,'sdfsdfsdfsdfsdf','sdfsdfsdf',NULL),(31,'ok','444bcb3a3fcf8389296c49467f27e1d6',NULL);
/*!40000 ALTER TABLE `blog_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-17  1:23:32
