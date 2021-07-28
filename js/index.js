(function ($)
{

    // Update copyright
    $('#copyright').html(new String(new Date().getFullYear()));

    $('#vis-counter-btn').on('click', function () {
        $('#vis-counter').css('display', 'block');
    });

    var w = $(document).width();
    var h = $(document).height() + 1;
    var w_i = 0;
    var h_i = 0;
    var s = '';

    var bgInterval = setInterval(function ()
    {
        s = new String(Math.random() >= 0.3 ? 1 : 0);

        if (Math.random() <= 0.3)
        {
            s += '\n';
        }

        if (Math.random() <= 0.017)
        {
            s += '<br>';
            ++h_i;
        }

        $('#bg').html($('#bg').html() + s);

        if (++w_i >= w) {
            if (++h_i >= h) {
                clearInterval(bgInterval);
            }
        }
    }, 2);

})(jQuery);
