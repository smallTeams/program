jQuery(".slideGroup .slideBox").slide({ mainCell:"ul",vis:4,prevCell:".sPrev",nextCell:".sNext",effect:"leftLoop"});


//底部翻页导航
jQuery(".financing-foot-nav ul li").click(function(){
    var $array=jQuery(".financing-foot-nav ul li");
    jQuery(".financing-foot-nav ul li").removeClass("active");
    jQuery(this).addClass("active");
    jQuery(".foot-nav-down").removeClass("hidden");
    jQuery(".foot-nav-top").removeClass("hidden");
    if($array[$array.length-1]==this){
        jQuery(".foot-nav-down").addClass("hidden");
        jQuery(".foot-nav-top").removeClass("hidden");        
        jQuery(".nav-more-down").addClass("hidden");
    }    
    if($array[0]==this){
        jQuery(".foot-nav-down").removeClass("hidden");
        jQuery(".foot-nav-top").addClass("hidden");
        jQuery(".nav-more-top").addClass("hidden");
    }
    if($array[$array.length-1]==jQuery(".financing-foot-nav ul li:eq("+($array.length-1)+"):hidden")[0]){
        jQuery(".nav-more-down").removeClass("hidden");
    }    
    if($array[0]==jQuery(".financing-foot-nav ul li:eq(0):hidden")[0]){
        jQuery(".nav-more-top").removeClass("hidden");
    }

});
