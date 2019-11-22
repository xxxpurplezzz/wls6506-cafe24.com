// top Navigation
$(".navi").mouseenter(function(){
	$(this).children(".top-sub").css({"display":"flex"});
	$(this).children(".top-sub").stop().animate({
		"opacity": 1, "top": "30px"
	}, 700);
});
$(".navi").mouseleave(function(){
	$(this).children(".top-sub").stop().animate({
		"opacity": 0, "top": "60px"
	}, 400, function(){
		$(this).css({"display":"none"});
	});
});


// fx-slide : 메인 배너
new FxSlide({
	slides: $(".main-ban"), 
	cnt: 1, 
	speed: 1000,
	delay: 4000,
	pager: $(".pagers")
});
new FxSlide({
	slides: $(".best-items"), 
	cnt: 5, 
	prev: $("#best-prev"),
	next: $("#best-next"),
	direction: "toRight",
	autoplay: false
});
new FxSlide({
	slides: $("#seller-slide"), 
	cnt: 3, 
	prev: $("#seller-prev"),
	next: $("#seller-next"),
});
new FxSlide({
	slides: $("#seller-slide2"), 
	cnt: 3, 
	prev: $("#seller-prev2"),
	next: $("#seller-next2"),
	direction: "toRight"
});
new FxSlide({
	slides: $("#choice-wrap"), 
	cnt: 5, 
	prev: $("#choice-prev"),
	next: $("#choice-next")
});
new FxSlide({
	slides: $("#choice-wrap1"), 
	cnt: 5, 
	prev: $("#choice-prev1"),
	next: $("#choice-next1")
});
new FxSlide({
	slides: $("#choice-wrap2"), 
	cnt: 5, 
	prev: $("#choice-prev2"),
	next: $("#choice-next2")
});




