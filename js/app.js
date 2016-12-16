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
