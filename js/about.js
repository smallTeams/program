/**
 * Created by XYC on 2016/9/16.
 */
$(document).ready(function(){
    $(".nav").on("click","li",function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
});
