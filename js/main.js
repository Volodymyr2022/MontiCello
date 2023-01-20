// ===== SHOW - on click btn ======

$('.btn').on('click', function() {
    $(this).prev('p').toggle('slow', function() {
   $(this).parent('div').toggleClass('project__info_blue', 1000, "easeOutSine");
    });
 $(this).prev('div').toggle('slow', function() {
    });
    $(this).html($(this).html() === 'SEE LESS'? 'SEE MORE' :'SEE LESS');
})


// ===== Gallery =====
$('.block__img').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    }
})