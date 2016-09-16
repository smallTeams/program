/**
 * Created by wxq on 2016/9/16.
 */
$(function () {
$('.coupon-box').on('click','.coupon-classify-item', function () {
    $('.coupon-classify-item').removeClass('active');
    $('.coupon-classify-item img').attr('src','../image/coupon-icon.png');
    $(this).addClass('active');
    $(this).find('img').attr('src','../image/coupon-icon-active.png');
});
    $('.coupon-status-box').on('click','.coupon-status-item', function () {
        $('.coupon-status-item').removeClass('active');
        $(this).addClass('active')
    })
})