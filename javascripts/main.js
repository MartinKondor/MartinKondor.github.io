(($) => {

    // Dark mode after 6pm and before 7am
    let t = new Date().getHours();
    if (t < 7 || t > 18) {
        $('body').css('background-color', 'rgb(0, 0, 34)');
        $('body').css('color', '#fefefe');
        $('#logo').attr('src', 'img/logo.jpg');
        $('link[rel="icon"]').attr('href', 'img/logo.jpg');
    }

    // Change copyright year
    $('#copyright').html($('#copyright').html() + new String(new Date().getFullYear()));

})(jQuery);
