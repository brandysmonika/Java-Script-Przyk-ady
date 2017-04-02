/* Pętla for */

for (var i=10 ; i>=0 ; i--) {
    console.log(i);
}

/* Pętla while */
var it;
while ( it != 6 ) {
    console.log(it);
    /* Losowanie od 1-10, dopóki nie wylosuje 6 pętla nie bedzie przerwana, gdy 6 zostanie wylosowana jako pierwsza petla sie nie wykona */
    it = Math.floor((Math.random() *10) +1); /* funkcja floor zaokragla liczby */
} 

/* Petla do...while */

var i;
do {
    console.log(i);
    i = Math.floor((Math.random() *10) +1);
} while ( i != 6);

/* Przerwanie petli break */
var a = 0;
while ( a < 10 ) {
    console.log(++a);
    
if (a == 5 ) {
    break;
    }
}

/* Przeskakiwanie do kolejnej interkacji - contiune */

for ( var b = 0; b < 10 ; ++b) {
    
    if (b == 5) { /* wyklucza 5 i przeskakuje do kolejnej liczby */
        continue;
    } else {
        console.log(b);
    }
    
    console.log("--");
}

var tablica =[1,null,3];
for (i=0; i<tablica.lenght; i++) {
    //console.log(tablica[i]);
    
    if(typeof tablica[i] !='number') {
        continue;
    } else {
        console.log(tablica[i]);
    }
}