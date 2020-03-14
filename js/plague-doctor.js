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

var htmlFragment =  "<div id=\"plague-doctor\" style=\"" +
                        "background-image:url('https://17abbmaz.fbmi.cz/images/Plague_Doctor.png');" +
                        "background-repeat:no-repeat;" +
                        "background-size:contain;" +
                        "background-position:right bottom;" +
                        "bottom:0;" +
                        "height:calc(537vh/25);" +
                        "position:fixed;" +
                        "right:2vw;" +
                        "width:calc(494vh/25);\">" +

                        "<div class=\"plague-doctor-bubble\" style=\"" +
                            "background-image:url('https://17abbmaz.fbmi.cz/images/bubble.svg');" +
                            "background-position:left center;" +
                            "background-repeat:no-repeat;" +
                            "background-size:100% 100%;" +
                            "bottom:10vh;" +
                            "display:none;" +
                            "max-width:25vw;" +
                            "min-width:200px;" +
                            "position:fixed;" +
                            "right:calc((494vh/25) + 2vw);\">" +

                            "<div class=\"plague-doctor-inner-bubble\" style=\"" +
                                "color:#2f2f2f;" +
                                "font-family:'Fondamento','Ink Free',cursive;" +
                                "font-size:3.0vh;" +
                                "margin:35px 55px 35px 35px;" +
                                "text-align:center;\">" +
                            "</div>" +

                        "</div>" +

                    "</div>";
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
        jQuery( "body" ).append( htmlFragment );
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
