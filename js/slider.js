$(document).ready(function(){
    $('.header-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.news-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        variableWidth: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            },
           
        ]
      });
});

