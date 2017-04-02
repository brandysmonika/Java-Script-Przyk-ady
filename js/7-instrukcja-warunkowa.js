'use strict';

var wzrostMateusz = 190;
var wzrostKai = 190;

if ( wzrostKai == wzrostMateusz ) {
    console.log("Kaja jest niższa"); /* Wyrazenie musi byc prawda zeby wyconsolowalo nam warunek */
}

/* Warunek if else */

if ( wzrostKai > wzrostMateusz ) {
    console.log("Kaja jest wyzsza");
} else {
    console.log("kaja jest niższa");
}

/* Warunek if else if drzewo decyzyjne */

if ( wzrostKai > wzrostMateusz ){
    console.log("kaja jest wyzsza");
    
} else if ( wzrostKai == wzrostMateusz ) {
    console.log ("Kaja jest tak wysoka jak Mateusz");
    
} else {
    console.log("Kaja jest nizsza");
}

/* Warunek switch */
var kolor = 'biały';

switch(kolor) {
    case 'czerwony':
        console.log('Kolor czerwony')
        break;
    case 'zielony':
        console.log ('Kolor zielony')
        break;
    case 'niebieski':
        console.log('Kolor niebieski')
        break;
    default:
        console.log('Inny kolor')
}

