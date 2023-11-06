$('.menu').on('click', function(){
	$('.menu-page').toggleClass('d-flex');
	$('body').toggleClass('noscroll');
	$('.menu').toggleClass("active");
});
$('.categories li').on('click', function(){
	$('.categories li').removeClass('active');
	$(this).addClass('active');
});