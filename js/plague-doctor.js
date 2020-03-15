var quotes = {};
// These tips are a compilation of common sense and a report by Czech TV ČT24.
quotes.cs = [
                "Žádné podávání rukou.",
                "Zaveďte a dodržujte pravidla o kašlání a kýchání.",
                "Videokonference jsou základní forma setkávání.",
                "Odložte větší setkávání.",
                "Vynucujte čištění rukou u vchodu.",
                "Snažte se nedotýkat obličeje.",
                "Jste-li memocní zůstejte doma a izolujte se.",
                "Nutné schůzly absolvujte venku na vzduchu, nikoliv v uzavřených místnostech.",
                "Pracujte z domova, je-li to alespoň trošku možné.",
                "Častěji otevírejte okna.",
                "Častěji si myjte ruce.",
                "Dezinfikujte pravidelně často používané plochy.",
                "Zvyšte ventilaci vzduchu v domě otevíráním oken nebo změnou nastavení klimatizace.",
                "Je-li to možné, nemocní členové domácnosti by měli být ve vlastní místnosti.",
                "Dveře do místnosti s nemocným by měly zůstávat zavřené.",
                "Jak nemocný, tak člen domácnosti, který se o něj stará, by měli nosit roušky nebo jinou ochranu obličeje.",
                "Snažte se platit kartou, ne hotovostí.",
                "Vyhněte se přeplněným prostorám."
            ];
// These tips are a compilation of common sense and materials published by the CDC.
quotes.en = [
                "Wash your hands frequently.",
                "Avoid touching your eyes, nose, and mouth.",
                "Limit social contact.",
                "Increase social distance.",
                "Cover your cough or sneeze with a tissue, then throw the tissue in the trash.",
                "Clean and disinfect frequently touched objects and surfaces.",
                "Don't shake hands.",
                "Keep surfaces disinfected.",
                "Avoid sharing personal items.",
                "If you become sick, stay in contact with others by phone or email.",
                "Stay informed about the local outbreak situation.",
                "Take care of your emotional health.",
                "Identify space that can be used to separate sick people if needed.",
                "Cover coughs and sneezes with a tissue or use the inside of your elbow.",
                "Clean frequently touched objects and surfaces.",
                "Stay home when sick."
            ];

var htmlFragment =  "<div id=\"plague-doctor\">" +
                        "<div class=\"plague-doctor-bubble\" >" +
                            "<div class=\"plague-doctor-inner-bubble\">" +
                            "</div>" +
                        "</div>" +
                    "</div>";
var cssFragment =   "<style>" +
                        "#plague-doctor {" +
                            "background-image:url('https://cdn.jsdelivr.net/gh/aidik/plague-doctor/img/Plague_Doctor.png');" +
                            "background-repeat:no-repeat;" +
                            "background-size:contain;" +
                            "background-position:right bottom;" +
                            "bottom:0;" +
                            "height:calc(537vh/25);" +
                            "position:fixed;" +
                            "right:2vw;" +
                            "z-index: 19;" +
                            "width:calc(494vh/25);" +
                        "}" +

                        ".plague-doctor-bubble {" +
                            "background-image:url('https://cdn.jsdelivr.net/gh/aidik/plague-doctor/img/bubble.svg');" +
                            "background-position:left center;" +
                            "background-repeat:no-repeat;" +
                            "background-size:100% 100%;" +
                            "bottom:10vh;" +
                            "display:none;" +
                            "max-width:30vw;" +
                            "min-width:200px;" +
                            "position:fixed;" +
                            "padding:6vh 3vw;" +
                            "right:calc((494vh/25) + 2vw);"+
                        "}" +

                        ".plague-doctor-inner-bubble {" +
                            "color:#2f2f2f;" +
                            "font-family:'Fondamento','Ink Free',cursive;" +
                            "font-size:3.0vh;" +
                            "margin:0 1.75vw 0 0;" +
                            "text-align:center;" +
                        "}" +

                        "@media screen and (max-width: 700px) {" +
                            ".plague-doctor-bubble {" +
                                "max-width:45vw;" +
                                "min-width:100px;" +
                                "padding:8vh 10vw;" +
                            "}" +
                        "}" +
                    "</style>";


var quotesLang = navigator.language.substring( 0, 2 );
var quotesLength = quotes[ quotesLang ].length;

loadjQueryIfNotAlreadyLoaded();
checkjQueryLoaded();

document.fonts.ready.then(function () {
    if ( document.fonts.check( "1em Fondamento" ) === false ) {
        var font = document.createElement( "link" );
        font.href = "https://fonts.googleapis.com/css?family=Fondamento:400;subset=latin-ext";
        font.rel = "stylesheet";
        document.getElementsByTagName( "head" )[ 0 ].appendChild( font );
        //console.log( "no Font" );
    }
});

function dojQuery() {
    jQuery( document ).ready( function() {
        jQuery( "body" ).append( htmlFragment ).append( cssFragment );
        jQuery( "#plague-doctor" ).on( "mouseenter touchstart", function(){
            jQuery( ".plague-doctor-bubble" ).fadeIn( 250 )
                                           .children()
                                           .empty()
                                           .text( quotes[ quotesLang ][ getRandomInt( 0, quotesLength ) ] );
        });

        jQuery( "#plague-doctor" ).on( "mouseleave touchend", function(){
            jQuery( ".plague-doctor-bubble" ).fadeOut( 100 );
        });
    });
}

function loadjQueryIfNotAlreadyLoaded() {
    if( !window.jQuery )
    {
       var script = document.createElement( "script" );
       script.crossOrigin = "anonymous";
       script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
       script.integrity = "sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=";
       document.getElementsByTagName( "head" )[ 0 ].appendChild( script );
       //console.log("no jQ");
    }
}

function checkjQueryLoaded() {
    if( !window.jQuery ) {
        window.setTimeout( checkjQueryLoaded, 50 );
    } else {
        jQuery.noConflict();
        dojQuery();
    }
}

function getRandomInt( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min ) ) + min;
}
