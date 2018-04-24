$('.slider-object_for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
	fade: true,
  asNavFor: '.slider-object_nav'
});
$('.slider-object_nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-object_for',
	dots: true,
	arrows: false,
  centerMode: true,
  focusOnSelect: true
});