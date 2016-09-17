/**
 * Created by wxq on 2016/9/16.
 */
laydate.skin('yalan');
var loanStart={
    elem: '#loan-start',
    format: 'YYYY/MM/DD',
    max: '2099-06-16 23:59:59', //最大日期
    istime: true,
    istoday: false,
    choose: function(datas){
        end.min = datas; //开始日选好后，重置结束日的最小日期
        end.start = datas //将结束日的初始值设定为开始日
    }
};
var loanEnd={
    elem: '#loan-end',
    format: 'YYYY/MM/DD hh:mm:ss',
    max: '2099-06-16',
    istime: true,
    istoday: false,
    choose: function(datas){
        start.max = datas; //结束日选好后，重置开始日的最大日期
    }
};
$(function () {
    $.each($('.loan-detail-show'), function (index,item) {
        if(index%2==0){
            $(item).css('backgroundColor','#fff');
        }else {
            $(item).css('backgroundColor','#f1f4f6');
        }
    });
    $('.loan-detail-choose-box').on('click','.loan-detail-choose-item', function () {
        $('.loan-detail-choose-item').removeClass('active');
        $(this).addClass('active');
    })
})