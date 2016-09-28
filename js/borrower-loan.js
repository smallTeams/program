/**
 * Created by wxq on 2016/9/16.
 */
laydate.skin('yalan');
var loanStart={
    elem: '#loan-start',
    format: 'YYYY/MM/DD hh:mm:ss',
    max: '2099-06-16 23:59:59', //�������
    istime: true,
    istoday: false,
    choose: function(datas){
        loanEnd.min = datas; //��ʼ��ѡ�ú����ý����յ���С����
        loanEnd.start = datas //�������յĳ�ʼֵ�趨Ϊ��ʼ��
    }
};
var loanEnd={
    elem: '#loan-end',
    format: 'YYYY/MM/DD hh:mm:ss',
    max: '2099-06-16',
    istime: true,
    istoday: false,
    choose: function(datas){
        loanStart.max = datas; //������ѡ�ú����ÿ�ʼ�յ��������
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