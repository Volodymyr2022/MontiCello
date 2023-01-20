// ===== Scroll =====

$("a").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing",
       behavior: 'smooth'
    });
    return false;
 });


// ==== Arrow scroll ====

$('.arrow-btn').on('click', function() {
    window.scrollTo({
        top: 800,
        behavior: 'smooth'
    });
})


// ==== UP - btn ======
function backToTop() {
let button = $('.down-btn');

$(window).on('scroll', () => {
    if($(this).scrollTop() >= 100) {
    button.fadeIn();
    } else {
        button.fadeOut();
    }
});
// button.on('click', (e) => {
//     e.preventDefault();
//     $('html').animate({scrollTop:0}, 10000)
// })
}
backToTop();


// ==== SCROLL - SECOND variant ======

// $(document).ready(function() {
//     $('a').click(function(){
//     let el = $(this).attr('href');
//     $('html, body').animate({
//     scrollTop: $(el).offset().top}, 500);
//     return false;
//     });
//     });

// ===== 3 variant ====

// $(document).ready(function(){
//     $('.menu').on('click','a', function(event){
//         event.preventDefault();
//         let id = $(this).attr('href'),
//         top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 1000);
//     })
// })