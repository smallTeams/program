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
        console.log(123)
    }else{
        $(".cover").css({
            position: "fixed",
            bottom : "0"
        })
    }
    //console.log(h + "......."+ h2);

   // console.log(h)
});
function closeicon(){
    document.querySelector(".cover").setAttribute("class","hidden");
}
$(".navbar-nav li").hover(function(){
	
});