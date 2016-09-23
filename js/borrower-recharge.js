$(function () {
    $('.recharge-type-box').on('click','.recharge-type-item', function () {
        $('.recharge-type-item').removeClass('active');
        $(this).addClass('active');
    })
})