/**
 * Created by wxq on 2016/9/16.
 */

$(function () {
    $('.selectpicker').selectpicker();
    laydate.skin('yalan');
    var start = {
        elem: '#start',
        format: 'YYYY/MM/DD',
        max: '2099-06-16 23:59:59', //最大日期
        istime: true,
        istoday: false,
        choose: function(datas){
            end.min = datas; //开始日选好后，重置结束日的最小日期
            end.start = datas //将结束日的初始值设定为开始日
        }
    };
    var end = {
        elem: '#end',
        format: 'YYYY/MM/DD',
        max: '2099-06-16 23:59:59',
        istime: true,
        istoday: false,
        choose: function(datas){
            start.max = datas; //结束日选好后，重置开始日的最大日期
        }
    };

});
function saveScore(){
    alert("点击了提交")
}
$(".act-btn,.opa").on('click',function(){
    $(".markdown").fadeOut();
});
$(".go-risk-assessment").on("click",function(){
    $(".markdown").fadeIn();
});