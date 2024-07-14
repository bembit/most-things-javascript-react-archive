// loading

window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; 
});

// waypoints

$('#nav-1').click(function() {
    $('html, body').animate({scrollTop: $('#section-3').offset().top}, 1000);
});
$('#main-cta').click(function() {
    $('html, body').animate({scrollTop: $('#section-3').offset().top}, 1000);
});
$('#nav-2').click(function() {
    $('html, body').animate({scrollTop: $('#section-4').offset().top}, 1000);
});
$('#nav-3').click(function() {
    $('html, body').animate({scrollTop: $('#section-3').offset().top}, 1000);
});
$('#nav-4').click(function() {
    $('html, body').animate({scrollTop: $('#backtotop').offset().top}, 1000);
});

// sticky nav

$(window).scroll(function () {
    if ($(window).scrollTop() > 700) {
        // $('.navbar').removeClass('navbar-absolute');
        $('.navbar').removeClass('navbar-dark');
        $('.navbar').addClass('navbar-fixed');
        $('.navbar').addClass('navbar-light');

    }
    if ($(window).scrollTop() < 700) {
        $('.navbar').removeClass('navbar-fixed');
        $('.navbar').removeClass('navbar-light');
        // $('.navbar').addClass('navbar-absolute');
        $('.navbar').addClass('navbar-dark');
    }
});

// gallery filter

$(function() {
    var selectedClass = "";
        $(".filter").click(function(){
            selectedClass = $(this).attr("data-rel");
            $("#gallery").fadeTo(100, 0.1);
            $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
                setTimeout(function() {
                $("."+selectedClass).fadeIn().addClass('animation');
                $("#gallery").fadeTo(300, 1);
                }, 300);
        });
});