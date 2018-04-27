$(document).ready(function() {
  
  //Adaptive menu
  var menuBtn = $('.top-nav_btn');
  var menu = $('.top-nav_menu');
  menuBtn.click(function(){
    menu.toggleClass('top-nav_menu__active');
  });

  //Additionally button for option object
  var addFormBtn = $('.add-settings');
  var addForm = $('.add-settings-form');
  var iconForm =$('.forRotate');
  addFormBtn.click(function(){
    addForm.toggleClass('add-settings-form__active');
    iconForm.toggleClass('forRotate__active');
  });

  //Button scrollTop
  $('body').append('<span id="go-top"><i class="fas fa-angle-up"></i></span>');
  $(function() {
 $.fn.scrollToTop = function() {
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $("#go-top").scrollToTop();
});
});