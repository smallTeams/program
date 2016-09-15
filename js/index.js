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
    //var h = $(".footer").offset().top-$(document).scrollTop();
   // console.log(h)
});
function closeicon(){
    document.querySelector(".cover").setAttribute("class","hidden");
}
$(".navbar-nav li").hover(function(){
	
});