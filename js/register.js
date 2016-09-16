/**
 * Created by XYC on 2016/9/16.
 */
$(function(){
    $(".navBtn").on("click","button",function(){
        var type = $(this).attr("data-type");
        $(this).addClass("on").siblings().removeClass("on");
        $("#r-form").attr("type",type);
    });
});