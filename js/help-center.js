
//导航跳转及选中功能
jQuery(".lists .nav-tabs>li").click(function(){
    jQuery(".lists .nav-tabs>li").removeClass("active");
    jQuery(this).addClass("active");     
    if(jQuery(this).attr("data-num")==0){
        jQuery(".describe-content ul").removeClass("hidden");
    }else{
        jQuery(".describe-content ul").addClass("hidden");
    }
    jQuery(".describe-content .help"+jQuery(this).attr("data-num")).removeClass("hidden");

})

jQuery(".describe-content a").click(function(){
    jQuery(this).next().toggleClass("hidden");
})


