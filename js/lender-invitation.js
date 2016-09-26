/**
 * Created by wxq on 2016/9/16.
 */
laydate.skin('yalan');
var invitationStart={
    elem: '#invitation-start',
    format: 'YYYY/MM/DD',
    max: '2099-06-16 23:59:59', //最大日期
    istime: true,
    istoday: false,
    choose: function(datas){
        end.min = datas; //开始日选好后，重置结束日的最小日期
        end.start = datas //将结束日的初始值设定为开始日
    }
};
var invitationEnd={
    elem: '#invitation-end',
    format: 'YYYY/MM/DD',
    max: '2099-06-16 23:59:59',
    istime: true,
    istoday: false,
    choose: function(datas){
        start.max = datas; //结束日选好后，重置开始日的最大日期
    }
};
$(function () {
    $('.classify-container').css('height',$('.show-detail-container').css('height'));
    $('.invitation-record-choose').on('click','.invitation-record-choose-item', function () {
        $('.invitation-record-choose-item').removeClass('active');
        $(this).addClass('active');
    })
})