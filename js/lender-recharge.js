
$(function () {
    $('.classify-container').css('height',$('.show-detail-container').css('height'));

    $('.recharge-type-box').on('click','.recharge-type-item', function () {
        $('.recharge-type-item').removeClass('active');
        $(this).addClass('active');
    })
})