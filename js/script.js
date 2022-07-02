$(function(){
    $('.slider__box').slick({
       prevArrow: '<img src="images/Arrow1.png" alt="" class="slider__arrow slider__arrow-left">',
       nextArrow: '<img src="images/Arrow2.png" alt="" class="slider__arrow slider__arrow-right">',
    });

    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('active');
    });
});