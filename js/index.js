(function ($) {
    let userLang = navigator.language || navigator.userLanguage;
    userLang = null;

    // Change html according to language
    if (userLang === "hu-HU") {
        window.location.href = "https://martinkondor.github.io/hu.html"
    }

    // Update copyright
    $('#copyright').html(new String(new Date().getFullYear()));

    // console.clear();
    console.log("%c Need a developer?\nGet in touch:\nmartinkondor@gmail.com", 'font-size: 32px; font-weight:bold;');

    $('#hire-me-btn').on("click", function () {
        if (userLang === "hu-HU") {
            window.open("mailto:martinkondor@gmail.com?subject=Rendel%C3%A9s%20-%20%5BAz%20%C3%96n%20Neve%5D%5D&body=Kedves%20Martin%2C%0A%0AFel%20szeretn%C3%A9lek%20venni%20egy%20feladat%20elv%C3%A9gz%C3%A9s%C3%A9re.%20Al%C3%A1bb%20tal%C3%A1lhat%C3%B3%20t%C3%B6bb%20inform%C3%A1ci%C3%B3%20a%20feladatr%C3%B3l.%0A%0AA%20feladat%20le%C3%ADr%C3%A1sa%3A%0A%5BA%20feladat%20%C3%A9s%20egy%C3%A9b%20k%C3%A9r%C3%A9sek%20le%C3%ADr%C3%A1sa%2C%20minden%20sz%C3%BCks%C3%A9ges%20r%C3%A9szlettel%5D%0A%0AK%C3%A9rlek%20vedd%20fel%20velem%20a%20kapcsolatot%20%5BAz%20%C3%96n%20El%C3%A9rhet%C5%91s%C3%A9ge%5D%2C%20hogy%20megbesz%C3%A9lhess%C3%BCk%20a%20rendelt%20feladatv%C3%A9gz%C3%A9s%20r%C3%A9szleteit%20%C3%A9s%20az%20%C3%A1rat%20amelyet%20erre%20a%20feladatra%20meg%C3%A1llap%C3%ADtasz.%0A%0AK%C3%B6sz%C3%B6n%C3%B6m%20seg%C3%ADts%C3%A9ged.%20T%C3%BCrelmesen%20v%C3%A1rom%20v%C3%A1laszod.%0A%0ALegjobbakat%2C%0A%5BAz%20%C3%96n%20Neve%5D%0A%5BAz%20%C3%96n%20El%C3%A9rhet%C5%91s%C3%A9ge%5D");
        }
        else {
            window.open("mailto:martinkondor@gmail.com?subject=Order%20Request%20-%20%5BYour%20Name%5D&body=Dear%20Martin%2C%0A%0AI%20am%20interested%20in%20hiring%20you.%20Please%20find%20the%20details%20of%20my%20order%20below.%0A%0ADescription%3A%0A%5BBrief%20description%20of%20your%20requirements%5D%0A%0APlease%20contact%20me%20at%20%5BYour%20Contact%20Information%5D%20to%20discuss%20the%20order%20further%20and%20provide%20me%20with%20a%20formal%20quote.%0A%0AThank%20you%20for%20your%20assistance.%20I%20look%20forward%20to%20your%20prompt%20response.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D%0A%5BYour%20Contact%20Information%5D");
        }
    });

})(jQuery);
