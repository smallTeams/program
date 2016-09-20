/**
 * Created by wxq on 2016/9/16.
 */


    laydate.skin('yalan');
    var financeStart={
        elem: '#finance-start',
        format: 'YYYY/MM/DD hh:mm:ss',
        max: '2099-06-16 23:59:59', //最大日期
        istime: true,
        istoday: false,
        choose: function(datas){
            financeEnd.min = datas; //开始日选好后，重置结束日的最小日期
            financeEnd.start = datas //将结束日的初始值设定为开始日
        }
    };
    var financeEnd={
        elem: '#finance-end',
        format: 'YYYY/MM/DD hh:mm:ss',
        max: '2099-06-16',
        istime: true,
        istoday: false,
        choose: function(datas){
            financeStart.max = datas; //结束日选好后，重置开始日的最大日期
        }
    };
$(function () {
    $('.finance-detial-choose').on('click','.detail-choose-item', function () {
        $('.detail-choose-item').removeClass('active');
        $(this).addClass('active');
    });
    $.each($('.finance-detai-show'), function (index,item) {
        if(index%2==0){
            $(item).css('backgroundColor','#fff');
        }else {
            $(item).css('backgroundColor','#f1f4f6');
        }
    });

})