$( document ).ready(function() {
    $(".dropdown-button").dropdown({ hover: true });
});

function checkScroll() {
    if ($(window).scrollTop() > 0) {
        $('.header').addClass("scrolled")
    } else {
        $('.header').removeClass("scrolled")
    }
}

$(window).on("scroll load resize", function () {
    checkScroll()
})

$(function () {
    $('#landing .typed').typed({
        strings: ['Google', 'SpaceX', 'Palantir', 'Facebook'].shuffle(),
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 600
    })
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}
