/**
 * Created by wxq on 2016/9/16.
 */
$(function () {

    $.each($('.repayment-detail-show'), function (index,item) {
        if(index%2==0){
            $(item).css('backgroundColor','#fff');
        }else {
            $(item).css('backgroundColor','#f1f4f6');
        }
    })
})