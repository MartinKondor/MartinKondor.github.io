(function ($) {

    var inDarkMode = false;


    document.getElementById('copyright').firstChild.data += `
        ${new Date().getFullYear()}
    `;

    /*
    * Animations
    */
    new Bounce().translate({
        from: { x: -500, y: -50 },
        to: { x: 0, y: 0 },
        duration: 3500,
        stiffness: 10
    })
    .applyTo(document.querySelectorAll('.translate-from-left-animation'));

    new Bounce().translate({
        from: { x: 500, y: 50 },
        to: { x: 0, y: 0 },
        duration: 3500,
        stiffness: 10
    })
    .applyTo(document.querySelectorAll('.translate-from-right-animation'));

    /*
    * Dark mode
    */
    $('#main-title').on('click', function (e) {
        if (!inDarkMode) {
            $('body').attr('style', 'filter: invert(100%);');
            inDarkMode = true;
        }
        else {
            $('body').attr('style', 'filter: invert(0%);');
            inDarkMode = false;
        }
    });

})(jQuery);
