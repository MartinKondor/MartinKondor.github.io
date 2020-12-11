(function ($) {

    $('#copyright').html($('#copyright').html() + new String(new Date().getFullYear()));
    var ctime = new Date().getTime();

    setInterval(() => {
        ctime = new Date().getTime();
        $('#clock').text(`${ctime} - 882828622000 = ${ctime - 882828622000}`);
    }, 100);

    /*
    let cols = 0;
    let rows = 0;

    let drawer = setInterval(function () {

        if (12.24 * cols++ > $(window).width()) {
            $('#bg').html($('#bg').html() + '<br>');
            cols = 0;
            
            if (20 * rows++ > $(window).height()) {
                return clearInterval(drawer);
            }
        }
        
        $('#bg').html($('#bg').html() + 'k');
    }, 10);
    */

})(jQuery);
