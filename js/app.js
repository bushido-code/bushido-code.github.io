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
