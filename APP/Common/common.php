<?php

    header('Content-type:text/html;charset="utf8"');
    
    //数组格式化
    function p($arry){
        echo '<pre>';
        print_r($arry);
    }
    
    //根据父级寻找子级
    function findChild($aggregate, $pid=0){
        $arry = array();
        foreach($aggregate as $value){
            if($value['pid']==$pid){
                $value['child'] = findChild($aggregate, $value['id']);
                $arry[] = $value;
            }
        }
        return $arry;
    }