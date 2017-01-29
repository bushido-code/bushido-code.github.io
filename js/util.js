
// Method: Array.shuffle
// -----------------------
// Arranges the elements of the called array into random order.
if (!Array.prototype.shuffle) {
    Array.prototype.shuffle = function () {
        // For each index in the array,
        for (let i = this.length - 1; i >= 0; i -= 1) {
            // Generate a random index less than or equal to it,
            const r = Math.floor(Math.random() * (i + 1))
            // And swap it with the current index.
            const t = this[i]
            this[i] = this[r]
            this[r] = t
        }
        return this
    }
}

// Polyfill: SVG Inliner
// ---------------------
// Replaces all .svg images with the equivalent inline svg, when given the class
// "inline".
$(function() {
    $('img.svg').each(function () {
        const $i = $(this)
        const iID = $i.attr('id')
        const iClass = $i.attr('class')
        const iStyle = $i.attr('style')
        const iURL = $i.attr('src')
            console.log('fetching' + iURL)

        $.get({
            url: iURL,
            cache: false
        }).done(function (data) {
            console.log('GRAE job')
            console.log(data)
            // Add replaced ID and classes to the new SVG, and remove invalid XML
            // tags as per http://validator.w3.org.
            const $svg = $('<div>' + data + '</div>').find('svg')
            if (iID) $svg.attr('id', iID)
            if (iClass) $svg.attr('class', iClass)
            if (iStyle) $svg.attr('style', iStyle)
            $svg.removeAttr('xmlns:a')
            $i.remove()
            $('body').append($svg)
            console.log($svg)
            console.log('done')
        }).fail(function (e) {
            console.log('sad')
            console.log(e)
        })
    })
})

// Polyfill: Smooth Internal Linking
// ---------------------------------
// Removes the jumpy effect when clicking on internal links, instead replacing
// it with a smooth scroll.
$(function () {
    $('a[href^="#"]').each(function () {
        const $a = $(this)
        const $t = $($a.attr('href'))
        if ($t.length == 0) return
        $a.click(function (e) {
            e.preventDefault()
            $('html, body').animate({
                scrollTop: $t.offset().top - $('#header').height()
            }, 500)
        })
    })
})
