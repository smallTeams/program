/**
 * Created by wxq on 2016/9/15.
 */
$(function () {
    $('.classify-container').on('click','.classify-item', function (e) {
        var target=$(e.target).attr('data-target');
        $('.classify-item').removeClass('active');
        $(this).addClass('active');
        $('.detail-panel').removeClass('active')
        $.each($('.detail-panel'), function (i,v) {
            if($(v).hasClass(target)){
                $(v).addClass('active');
            }
        })
    })
});