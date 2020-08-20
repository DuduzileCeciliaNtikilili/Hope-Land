$(document).ready(function () {
    $(".menu-toggler").on ("click", function () {
        $(this).toggleClass("open");
        $(top.nev).toggleClass("open");
    });

    $(".top-nav .nav-link").on("click", function () {
        $(".menu-toggler").removeClass("open");
        $(top.nev).moveClass("open");
    });

    $('.nav a[href*="#"]').on("click", function () {
        $('html, body').animate(keyframes:{
            scrollToTop: 100 - $($(this).attr('href')).offset().top
        }, options:2000);
    });

    $('#up').on('click', function () {
        $('html, body').animate(keyframes: {
            scrollTop: 0
        }, options:2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800
    });
});
