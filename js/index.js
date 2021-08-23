(function ($)
{

    // Update copyright
    $('#copyright').html(new String(new Date().getFullYear()));

    $('#vis-counter-btn').on('click', function () {
        $('#vis-counter').css('display', 'block');
    });

})(jQuery);
