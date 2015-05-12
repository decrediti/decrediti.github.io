$( document ).ready(function(){
w_width = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
w_height = window.innerHeight ||
                 document.documentElement.clientHeight ||
                 document.body.clientHeight;
$("#header").css({"height":w_height});
control = 0;
$(window).scroll(function(){
  var scrolled = $(window).scrollTop();
  if (scrolled > 20) {
  	control++;
  	$("#header").stop().css({"height":"185px","position":"absolute","top":"0"});
  	$("#header img").stop().animate({"height":"170px"},400);
  	$(".lefter").stop().animate({"width":"28px"},400);
  	$("#header span").stop().animate({"font-size":"3em","margin":"70px 30px"},900);
  	$("#header br").remove();
  	$("#header a").stop().animate({"margin-top":"-24px"},400);
  	$("#content").stop().animate({"margin":"188px 0 0 0"},900);
  	if (control == 1) {
  	    $("body").animate({scrollTop: 0},100);
    }

  }

});






});