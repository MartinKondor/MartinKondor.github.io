(function ($) {

    // Update copyright
    $('#copyright').html($('#copyright').html() + new String(new Date().getFullYear()));

    // Smooth scroll
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    // Dark mode
    var darkModeOn = false;

    function darkMode() {
        $('body').css('color', 'rgb(248, 248, 248)');
        $('body').css('background-color', 'rgb(0, 0, 34)');
        $('.bg-particles').css('background-color', 'rgb(0, 0, 34)');
        
        $('#home').css('background-image', 'none');
        $('#about-me').css('background-image', 'none');
        $('h1').css('color', 'rgb(248, 248, 248)');
        $('h2').css('color', 'rgb(248, 248, 248)');

        $('#skillset > i').css('background-color', 'rgb(200, 200, 234, 0.7)');
        $('#skillset > img').css('background-color', 'rgb(200, 200, 234, 0.7)');
        $('#skillset > span').css('background-color', 'rgb(200, 200, 234, 0.7)');
        $('#skillset > i').css('padding', '30px');
        $('#skillset > img').css('padding', '30px');
        $('#skillset > span').css('padding', '30px');
        $('#skillset > i').css('border-radius', '100%');
        $('#skillset > img').css('border-radius', '100%');
        $('#skillset > span').css('border-radius', '100%');

        $('#skillset > span').css('color', 'rgb(0, 0, 34)');

        $('.bg-particles li').css('background-color', 'rgb(20, 20, 54)');
    }

    $('#dark-mode-btn').on('click', function () {
        if (!darkModeOn)
        {
            $('#dark-mode-btn').html(`
                <i class="fas fa-sun"></i>
            `);
            darkMode();
            darkModeOn = true;
        }
        else {
            location.reload();
        }
    });
    

})(jQuery);
