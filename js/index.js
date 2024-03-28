(function ($) {

    // Function to toggle dark mode
    function toggleDarkMode() {
        // Toggle dark mode class on body
        $('body').toggleClass('dark-mode');

        if ($('body').hasClass('dark-mode')) {
            $("#logo").attr("src", "img/logo.jpg");
        }
        else {
            $("#logo").attr("src", "img/logo-w.jpg");
        }

        // Save dark mode preference in local storage
        localStorage.setItem('darkMode', $('body').hasClass('dark-mode'));
    }

    // Check if dark mode preference is saved in local storage
    var darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        $('body').addClass('dark-mode');
    }

    // Dark mode button click event
    $('#lightModeBtn').click(function(e) {
        e.preventDefault();
        toggleDarkMode();
    });

    // Update copyright
    $('#copyright').html(new String(new Date().getFullYear()));

})(jQuery);
