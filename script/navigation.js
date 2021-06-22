$(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
      $('.nav').addClass("nav__scroll nav-scroll__border");
      $('.nav__items').addClass("nav-scroll__border");
      $('.nav__item-border--color').addClass("nav-scroll__border");
      $('.nav__item').addClass('nav-scroll__text');
      $('.header__logo').addClass('nav-scroll__text');
      $('.nav__burger--line').addClass('nav__scroll--background-line');
    } else {
      $('.nav').removeClass("nav__scroll nav-scroll__border");
      $('.nav__items').removeClass("nav-scroll__border");
      $('.nav__item-border--color').removeClass("nav-scroll__border");
      $('.nav__item').removeClass('nav-scroll__text');
      $('.header__logo').removeClass('nav-scroll__text');
      $('.nav__burger--line').removeClass('nav__scroll--background-line');
    }
});

$('.js-scroll-trigger').click(function(){
    let scrollName = $(this).attr('data-scroll'),
        scrollElem = $(scrollName);
        scrollTop = scrollElem.offset().top;
        $('html, body').animate({
    scrollTop: scrollTop
  }, 500)
  });

$('.nav__item--home').click(function(){
    $(this).addClass('nav__active')
    $('.nav__item--prod').removeClass('nav__active')
    $('.nav__item--fags').removeClass('nav__active')
    $('.nav__item--contact').removeClass('nav__active')
});

$('.nav__item--prod').click(function(){
    $(this).addClass('nav__active')
    $('.nav__item--home').removeClass('nav__active')
    $('.nav__item--fags').removeClass('nav__active')
    $('.nav__item--contact').removeClass('nav__active')
});

$('.nav__item--fags').click(function(){
    $(this).addClass('nav__active')
    $('.nav__item--home').removeClass('nav__active')
    $('.nav__item--prod').removeClass('nav__active')
    $('.nav__item--contact').removeClass('nav__active')
});

$('.nav__item--contact').click(function(){
    $(this).addClass('nav__active')
    $('.nav__item--home').removeClass('nav__active')
    $('.nav__item--fags').removeClass('nav__active')
    $('.nav__item--prod').removeClass('nav__active')
});