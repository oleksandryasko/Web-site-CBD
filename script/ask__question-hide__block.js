$('.ask__text--one').click(function(){
    $('.fa-plus--one').toggleClass('fa-plus__rotade');
    $('.fa-plus--two').removeClass('fa-plus__rotade');
    $('.fa-plus--three').removeClass('fa-plus__rotade');
    $('.fa-plus--four').removeClass('fa-plus__rotade');
    $('.hide__text--two').slideUp(600);
    $('.hide__text--three').slideUp(600);
    $('.hide__text--four').slideUp(600);
    $('.hide__text--one').toggle(600);
});

$('.ask__question--two').click(function(){
    $('.fa-plus--two').toggleClass('fa-plus__rotade');
    $('.fa-plus--one').removeClass('fa-plus__rotade');
    $('.fa-plus--three').removeClass('fa-plus__rotade');
    $('.fa-plus--four').removeClass('fa-plus__rotade');
    $('.hide__text--two').toggle(600);
    $('.hide__text--one').slideUp(600);
    $('.hide__text--three').slideUp(600);
    $('.hide__text--four').slideUp(600);
});

$('.ask__question--three').click(function(){
    $('.fa-plus--three').toggleClass('fa-plus__rotade');
    $('.fa-plus--one').removeClass('fa-plus__rotade');
    $('.fa-plus--two').removeClass('fa-plus__rotade');
    $('.fa-plus--four').removeClass('fa-plus__rotade');
    $('.hide__text--three').toggle(600);
    $('.hide__text--one').slideUp(600);
    $('.hide__text--two').slideUp(600);
    $('.hide__text--four').slideUp(600);
});

$('.ask__question--four').click(function(){
    $('.fa-plus--four').toggleClass('fa-plus__rotade');
    $('.fa-plus--one').removeClass('fa-plus__rotade');
    $('.fa-plus--two').removeClass('fa-plus__rotade');
    $('.fa-plus--three').removeClass('fa-plus__rotade');
    $('.hide__text--four').toggle(600);
    $('.hide__text--one').slideUp(600);
    $('.hide__text--three').slideUp(600);
    $('.hide__text--two').slideUp(600);
});






