$(document).ready(function(){
	$(".logo-box").mouseenter(function(){
		$(".logo2").stop().animate({height:'50px'})
	}).mouseleave(function(){
		$(".logo2").stop().animate({height:'0'})
		
	})
})
