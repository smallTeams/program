jQuery(".slide .slideBox").slide({
    titCell:".hd li",
    mainCell:".bd ul",
    autoPlay:true,
    interTime:5000,
    delayTime:700
});
jQuery(".over").slide({
    mainCell:"ul",
    effect:"top",
    autoPlay:true,
    vis:3
});
$(document).scroll(function(){
    var h = $(document).scrollTop() + $(window).height();
    var h2 = $(".footer").offset().top - 10;
    if ( h >=  h2 ){
        $(".cover").css({
            position: "absolute",
            bottom : "10px"
        })
    }else{
        $(".cover").css({
            position: "fixed",
            bottom : "0"
        })
    }
});
function closeicon(){
    document.querySelector(".cover").setAttribute("class","hidden");
}
$(".top").on('click',function(){
    $('html,body').animate({scrollTop: 0}, 500);
});