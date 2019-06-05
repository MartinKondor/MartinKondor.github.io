(function ($) {
    var inDarkMode = false;
    var increasedImg = [];

    document.getElementById('copyright').firstChild.data += `
        ${new Date().getFullYear()}
    `;

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
