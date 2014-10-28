$(function(){
	$("div.welcome span:nth-child(2)").animate({"opacity":"1"},2000);
	$("div.nav a:nth-child(1)").animate({"opacity":"1","left":"0px"},600)
								.animate({"opacity":"0.7"},500)
							   	.animate({"opacity":"1"},500,function(){
							   	$(this).next("a")
							   	.animate({"opacity":"0.7"},500)
							   	.animate({"opacity":"1"},500,function(){
							   	$(this).next("a")
							   	.animate({"opacity":"0.7"},500)
							   	.animate({"opacity":"1"},500,function(){
							   	$(this).next("a")
							   	.animate({"opacity":"0.7"},500)
							    .animate({"opacity":"1"},500)
							   });
							   });
							   });
	$("div.nav a:nth-child(2)").animate({"opacity":"1","top":"0px"},600)							   
	$("div.nav a:nth-child(3)").animate({"opacity":"1","top":"0px"},600)
	$("div.nav a:nth-child(4)").animate({"opacity":"1","left":"0px"},600)

	$("div.nav a").hover(function(){
		$(this).animate({"top":"-25px"},400);
	},function(){
		$(this).animate({"top":"0px"},400);
	});
							   
})