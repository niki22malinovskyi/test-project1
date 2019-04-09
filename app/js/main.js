$(function(){
  $('.slider__wrapper, .news__slide__wrapper').slick({
    prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
    responsive:[
      {
        breakpoint: 651,
        settings: {
          arrows:false,
          dots:true
        }
      }]
  });
  $('.menu__btn').click(function(){
    $('.menu ul').slideToggle();
  });
});