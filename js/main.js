$(document).ready(function() {

    /* Preloader */

    $(window).on("load", function() {
        $('.spinner-wrapper').fadeOut('slow');
    });

    /* Back to top */
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 500) {
            $('.btt').fadeIn();
        } else {
            $('.btt').fadeOut();
        }
    });

    /*Dropdown */

    $('.dropbtn ').click(function() {
        $('.dropdown-content a').toggle();
    });

    /* Slide */

    window.sr = ScrollReveal();
    sr.reveal('#left-grid', {
        duration: 1500,
        origin: 'left',
        distance: '300px',
        viewFactor: 0.2,
    });
    sr.reveal('#right-grid', {
        duration: 1500,
        origin: 'right',
        distance: '300px',
        viewFactor: 0.2,
    });
    sr.reveal('.show-box1', {
        duration: 1500,
        distance: '300px',
        viewFactor: 0.2,
    });
    sr.reveal('.show-box2', {
        duration: 1500,
        delay: 500,
        distance: '300px',
        viewFactor: 0.2,
    });

    //footer year
    $('#year').text(new Date().getFullYear());

});