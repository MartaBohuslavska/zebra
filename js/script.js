$(document).ready(function() {
  $('.slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  })

  $('.slide-prev').on('click', function(){
    $('.slider').slick('slickPrev');
  });

  $('.slide-next').on('click', function(){
      $('.slider').slick('slickNext');
  });

})