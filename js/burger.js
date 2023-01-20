$(document).ready(function() {
    $('.menu__burger').click(function() {
        $('.menu__burger,.menu__items').toggleClass('active');
        $('.menu__burger span').toggleClass('hide');
        $('.menu__burger::before').toggleClass('rotate');
    })
})