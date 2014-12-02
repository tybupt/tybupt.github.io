$(function(){
	$("a.start").mouseover(function(){
		$(this).parent("div").addClass("on");
		$("div.content div.zhao").addClass("on");

	});
	$("a.info-intr").mouseout(function(){
		$(this).parent("div").removeClass("on");
		$("div.content div.zhao").removeClass("on");
	});
})