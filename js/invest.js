jQuery(".slideGroup .slideBox").slide({ mainCell:"ul",vis:4,prevCell:".sPrev",nextCell:".sNext",effect:"leftLoop"});


//下拉菜单
jQuery(".invest-select span").click(function(){
    jQuery(this).next().toggleClass("hidden");
});
// 关闭下拉菜单
jQuery(".invest-select ul li").click(function(){
    jQuery(this).parent().toggleClass("hidden");
    jQuery(this).parents(".invest-select").children("span").html(jQuery(this).html());
});

  
function scroll(id) {  
jQuery("#" + id).HoverTreeScroll(1000);  
}  


//点击图片放大效果
jQuery(".lists .tempWrap .pic a").click(function(){
    // console.log(jQuery(this).find("img").attr("src"));
    jQuery(".invest-cover").removeClass("hidden").find("img").attr("src",jQuery(this).find("img").attr("src"));
    document.documentElement.style.overflow='hidden';
})
//关闭放大效果
jQuery(".invest-cover div .close_cn").click(function(){
    jQuery(".invest-cover").addClass("hidden");
    document.documentElement.style.overflow='';
})

//导航跳转及选中功能
jQuery(".lists .nav-tabs>li").click(function(){
    jQuery(".lists .nav-tabs>li").removeClass("active");
    jQuery(this).addClass("active");
})



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
