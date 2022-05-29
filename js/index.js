(function ($) {

    const LANG = {
        "hu-HU": {
            "#name": "Kondor Martin",
            "#introduction": "Szoftverfejlesztő. A Pannon Egyetem Mérnökinformatikus BSc szakos hallgatója.",
            "#software-title": "Szoftverek",
            "#apps-title": "Alkalmazások",
            "#essays-title": "Esszék",
            //"#papers-title": "Cikkek",
        }
    };
    let userLang = navigator.language || navigator.userLanguage;
    userLang = null;

    // Change html according to language
    if (userLang === "hu-HU") {
        for (let k of Object.keys(LANG["hu-HU"])) {
            $(k).html(LANG["hu-HU"][k]);
        }
    }

    // Update copyright
    $('#copyright').html(new String(new Date().getFullYear()));


})(jQuery);
