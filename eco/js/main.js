
$(".fa-user").mouseover(function(){
	$(this).next().css({
		"opacity":1, "transform":"translateY(0)"
	});
});
$(".fa-user").mouseleave(function(){
	$(this).next().css({
		"opacity":0, "transform":"translateY(20px)"
	});
});

/* 
$(객체).animate(
	{애니메이션 될 css}, 
	[1000(속도)], 
	[timing func], 
	[function(){
		애니메이션 종료후 발생할 함수
	}]);
*/

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

// items
var items = [
	{
		src: "../img/1.jpg", 
	},
	{
		src: "../img/2.jpg", 

	},
	{
		src: "../img/3.jpg", 

	},
	{
		src: "../img/4.jpg", 
	},
	{
		src: "../img/5.jpg", 
	},
	{
		src: "../img/6.jpg", 
	}
];

for(var i=0, html=''; i<items.length; i++) {
	html  = '<ul class="item p-3 mb-4 col-sm-6 col-md-4">';
	html += '<li class="rounded-circle overflow-hidden">';
	html += '<img src="'+items[i].src+'" class="w-100"></li>';
	html += '</ul>';
	$(".items > .row").append(html);
}

$(".item").mouseenter(function(){
	$(this).find("img").addClass("item-img-hover");
});
$(".item").mouseleave(function(){
	$(this).find("img").removeClass("item-img-hover");
});


// ads
var ads = [
	{
		src: "../img/image_1558102729824_500jpg",
		title: "Vegans Foods",
		desc: "Nutrition program without animal products.",
		link: "https://naver.com",
		position: "left"
	},{
		src: "../img/image_1558102729824_500jpg",
		title: "Diabetic Nutrition",
		desc: "Maximum comfortable gradual weight loss<br>and the establishment of metabolic processes",
		link: "https://daum.net",
		position: "right"
	},{
		src: "../img/image_1558102729824_500jpg",
		title: "Center Nutrition",
		desc: "Maximum comfortable gradual weight loss<br>and the establishment of metabolic processes",
		link: "https://daum.net",
		position: "center"
	}
];

// popular

var populars = [
	{src:"../img/image_1573481682028_1000.jpg", title: "Happy 2020 ☻", price:"14,000원"},
	{src:"../img/image_1570809617095_500.jpg", title: "BOO HALLOWEEN STICKER", price:"4,000원"},
	{src:"../img/image_1570716729087_1000.jpg", title: "BOOOOO〠_ PHONECASE", price:"17,000원"},
	{src:"../img/image_1571976463327_1000.jpg", title: "S'more Quokka Keyring", price:"13,000원"},
	{src:"../img/image_1569605735261_1000.jpg", title: "GUMMY BOBO STICKER", price:"3,500원"},
	{src:"../img/image_1569638226022_1000.jpg", title: "STRAWBERRY BOBO STRING POUCH", price:"$48.00"},
	{src:"../img/image_1573563883533_1000.jpg", title: "[I'm Marsh!] IPAD / LAPTOP POUCH", price:"46,000원"},
	{src:"../img/image_1559988505320_500.jpg", title: "BOBO FOREST ♣︎", price:"5,000원"},
];

for(var i in populars) {
	html =	'<ul class="prd my-4 position-relative pointer">';
	html +=	'<li clas	prd-img><img src="'+populars[i].src+'" class="w-100"></li>';
	html +=	'<li class="prd-title mt-3 f-12">'+populars[i].title+'</li>';
	html +=	'<li class="prd-price my-2 f-17">'+populars[i].price+'</li>';
	html +=	'<li class="prd-bt">'
	html +=	'<button class="btn btn-sm btn-light">Add to Cart</button>';
	html +=	'</li>';
	html +=	'<li data-toggle="tooltip" data-placement="left" title="Quick View" class="prd-icon prd-view tooltip-bt"><i class="fas fa-eye"></i></li>';
	html +=	'<li data-toggle="tooltip" data-placement="left" title="You need to login" class="prd-icon prd-login tooltip-bt"><i class="fas fa-heart"></i></li>';
	html +=	'<li data-toggle="tooltip" data-placement="left" title="Add to Compare"  class="prd-icon prd-compare tooltip-bt"><i class="fas fa-balance-scale"></i></li>';
	html +=	'</ul>';
	$(".popular-wrap .prds").append(html);
}


$(".popular-wrap .prds").mouseenter(function(){
	$(this).find(".prd-icon").css({"opacity": 1});
});
$(".popular-wrap .prds").mouseleave(function(){
	$(this).find(".prd-icon").css({"opacity": 0});
});


// footer
$(".footer-wrap .title").click(function(){
	if($(this).css("cursor") == "pointer") {
		$(this).parent().children("list").toggle();
		var $span = $(this).children("span");
		if ($span.text() == "+") $span.text("-");
		else $span.text("+");
	}
});

// WOW 시동
new WOW().init();

// tooltip 시동
$(".tooltip-bt").tooltip();
