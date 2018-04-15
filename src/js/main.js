$(document).ready(function() {
  
	//Param slick slider
	$('.slider-list-object').slick({
		dots: true,
		arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  // adaptive menu
  var menuBtn = $('.top-nav_btn');
  var menu = $('.top-nav_menu');
  menuBtn.click(function(){
    menu.toggleClass('top-nav_menu__active');
  });

});