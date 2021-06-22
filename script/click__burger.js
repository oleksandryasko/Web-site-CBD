$('.nav__burger').click(function(){
    $('.nav__burger--rotade45').toggleClass('nav__burger--change-one');
    $('.nav__burger--rotade-45').toggleClass('nav__burger--change-two');
    $('.nav__burger--none').toggleClass('nav__burger--none-line');
    $('.nav__items').toggle(600);
    $('.nav').toggleClass('background__header--burger');
    $('.nav__logo').toggleClass('nav__logo--border ');
});