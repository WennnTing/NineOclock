$(document).ready(function () {
    $(window).scroll(function () {
        let scroll_top = $(window).scrollTop()
        // console.log(scroll_top)

        if (scroll_top >= 86) {
            // alert(123)
            $('.header').addClass("header_sticky")
        } else {
            $('.header').removeClass('header_sticky')
        }
    });
    $('.header')
    // hamberger

    $('#hamberger').on('click', function () {
        // console.log('#hamberger')
        $('#ul_block').fadeToggle("5000");

        if ($('#hamberger').attr('src') == 'image/icons/close.svg') {
            $('#hamberger').attr('src', "image/icons/hamberger2.svg")
        } else {
            $('#hamberger').attr('src', 'image/icons/close.svg')
        }
        console.log($('#hamberger').attr('src'))

    })

});
