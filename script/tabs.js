$('.about__btn--click-one').click(function(){
    $(this).addClass('tabs__active');
    $('.about__btn--click-two').removeClass('tabs__active');
    $('.about__btn--click-three').removeClass('tabs__active');
    $('.about__info--tabs-first').slideDown(400);
    $('.about__info--tabs-second').slideUp(400);
    $('.about__info--tabs-third').slideUp(400);
});

$('.about__btn--click-two').click(function(){
    $(this).addClass('tabs__active')
    $('.about__btn--click-one').removeClass('tabs__active');
    $('.about__btn--click-three').removeClass('tabs__active');
    $('.about__info--tabs-first').slideUp(400);
    $('.about__info--tabs-second').slideDown(400);
    $('.about__info--tabs-third').slideUp(400);
});

$('.about__btn--click-three').click(function(){
    $(this).addClass('tabs__active')
    $('.about__btn--click-one').removeClass('tabs__active');
    $('.about__btn--click-two').removeClass('tabs__active');
    $('.about__info--tabs-first').slideUp(400);
    $('.about__info--tabs-second').slideUp(400);
    $('.about__info--tabs-third').slideDown(400);
});