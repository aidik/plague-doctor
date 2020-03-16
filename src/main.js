var quotesLang = navigator.language.substring( 0, 2 );
if (typeof quotes[ quotesLang ] === "undefined") {
    quotesLang = "en";
}
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
