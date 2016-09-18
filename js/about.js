/**
 * Created by XYC on 2016/9/16.
 */
$(document).ready(function(){
    $(".nav").on("click","li",function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
    getHtml('company');
});
function getHtml(name){
    $.get('a-'+name+'.html',function(data){
        alert(123)
        $(".a-r").html(data)
    });
}