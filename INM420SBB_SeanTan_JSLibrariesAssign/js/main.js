$(document).ready(function() {
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    AOS.init({
        duration: 1200,
    });

    document.addEventListener('DOMContentLoaded', function() {
        AOS.init();
    });
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

