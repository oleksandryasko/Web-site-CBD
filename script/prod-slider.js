$(document).ready(function(){
    $('.prod-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1, 
        responsive:[
            {
                breakpoint: 1567,
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 790,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    });
});

$(document).ready(function(){
    $('.slider-text__block').slick({
        slidesToShow: 1,
        slidesToScroll: 1, 
        
    });
});



