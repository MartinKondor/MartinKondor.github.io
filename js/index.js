(function ($) {

    function setTitle() {
        if (titleSwitch) $("title").html("I am Martin Kondor");
        else $("title").html("👋 Hi!");
        titleSwitch = !titleSwitch;
    }

    function setUserLang(userLang) {
        let huText = {
            "lang-uni-major": "Mérnökinformatikus BSc",
            "lang-uni-name": "Pannon Egyetem",
            "lang-uni-tdk": "TDK",
            "lang-uni-tdk-name": "Magyar nyelvű álhírek felismerése mély neurális hálózattal",
            "lang-uni-tdk-desc": "2. helyezés",
            //"lang-contact": "Kapcsolat",
            //"lang-research": "Kutatás",
            //"lang-edu": "Tanulmányok",
            //"lang-exp": "Tapasztalat",
            //"lang-lang": "Nyelvek",
        };
    
        // Change html according to language
        if (userLang.toLowerCase() === "hu-hu") {
            for (let key of Object.keys(huText)) {
                $("." + key).html(huText[key]);
            }
        }
    }
    
    // Set user lang by hand
    // $("#english-lang").on("click", function (e) {setUserLang("en");});

    // Update copyright
    $('#copyright').html(new String(new Date().getFullYear()));

    let titleSwitch = false;
    //setInterval(setTitle, 2000);

    // Set user language
    // setUserLang(navigator.language || navigator.userLanguage);

    // $("#free-counter").css("display", "none");

    if (document.referrer.toLowerCase().includes("reddit")) {
        $("#reddit-alert").css("display", "block");
    }

})(jQuery);
