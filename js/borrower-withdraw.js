$(function () {
    $('.go-withdraw').on('click', function () {
        layer.confirm('是否授权？', {
            btn: ['授权','取消']
        }, function(){
           /*授权执行的回调*/
        }, function(){
/*取消执行的回调*/
        });
    })
})