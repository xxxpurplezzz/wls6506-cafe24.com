(function($) {
	//Skill
	$('.publishing .circle').eq(0).circleProgress({
		value: 0.9,
		fill: {gradient: ['#afc6e8']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(90 * progress) + '%');
	});
	$('.publishing .circle').eq(1).circleProgress({
		value: 0.85,
		fill: {gradient: ['#afc6e8']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(85 * progress) + '%');
	});
	$('.publishing .circle').eq(2).circleProgress({
		value: 0.7,
		fill: {gradient: ['#afc6e8']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(70 * progress) + '%');
	});
	$('.publishing .circle').eq(3).circleProgress({
		value: 0.5,
		fill: {gradient: ['#afc6e8']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(50 * progress) + '%');
	});
	$('.publishing .circle').eq(4).circleProgress({
		value: 1,
		fill: {gradient: ['#afc6e8']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(100 * progress) + '%');
	});


	$('.design .circle').eq(0).circleProgress({
		value: 1,
		fill: {gradient: ['#afc6e8']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(100 * progress) + '%');
	});
	$('.design .circle').eq(1).circleProgress({
		value: 0.95,
		fill: {gradient: ['#afc6e8']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(95 * progress) + '%');
	});


	
	$('.framework .circle').eq(0).circleProgress({
		value: 0.7,
		fill: {gradient: ['#afc6e8']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(70 * progress) + '%');
	});
	$('.framework .circle').eq(1).circleProgress({
		value: 0.5,
		fill: {gradient: ['#afc6e8']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(50 * progress) + '%');
	});
	$('.framework .circle').eq(2).circleProgress({
		value: 1,
		fill: {gradient: ['#afc6e8']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(100 * progress) + '%');
	});
	$('.framework .circle').eq(3).circleProgress({
		value: 1,
		fill: {gradient: ['#afc6e8']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(100 * progress) + '%');
	});
})(jQuery);


// WOW 시동
new WOW().init();

// http://openweathermap.org/img/wn/10d@2x.png

$.ajax({
	url: "https://api.openweathermap.org/data/2.5/weather",
	data: {
		appid: "318111dbc09a2ae0a8188f9a97f23685",
		units: "metric",
		id: 1835848,
	},
	success: function(res){
		console.log(res);
		$(".map-icon").attr("src", "http://openweathermap.org/img/wn/"+res.weather[0].icon+"@2x.png");
		$(".map-temp").html(res.main.temp);
		$(".map-desc").html(res.weather[0].description);
	}
});


$(".icon-img").click(function(){
	var idx = $(this).index();
	var top = [];
	$(".page").each(function(i){
		top[i] = $(this).offset().top;
	});
	$("html, body").stop().animate({"scrollTop": top[idx]+"px"}, 1000);
});