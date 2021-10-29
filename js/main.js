$(function () {

    $('.products__slider').slick({
        autoplay: true,
        infinite: false,
        prevArrow: '<button class="slick-prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
        nextArrow: '<button class="slick-next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
    });


    $('.questions__item-title').on('click', function(){

        $('.questions__item').removeClass('questions__item--active');
        $(this).parent().addClass('questions__item--active');
        
    })


});