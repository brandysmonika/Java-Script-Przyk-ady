'use strict';

var jsonOsoby = {
    "osoby": [
        {imie: "Krystian", nazwisko: "Dziopa", wzrost: "180", oczy: "niebieskie", zainteresowania: [ {nazwa: "podroze"}, {nazwa: "gotowanie"}] },
        {imie: "Kasia", nazwisko: "Zając", wzrost: "170", oczy: "zielone"},
        {imie: "Łukasz", nazwisko: "Badocha", wzrost: "170", oczy: "duże"}
    ]
}

console.log(jsonOsoby);


jsonOsoby.osoby.forEach(function(element, index){ 
    
    console.log(' Pracownik ' + (index+1) + ' ma na imie ' + element.imie);
}); 

var jsonOsoby = {
    "osoby": [
        {imie: "Krystian", nazwisko: "Dziopa"},
        {imie: "Kasia", nazwisko: "Zając"},
        {imie: "Łukasz", nazwisko: "Badocha"}
    ]
}

console.log(jsonOsoby);


jsonOsoby.osoby.forEach(function(element, index){ 
    
    console.log((index) + ' - ' + element.imie + ' ' + element.nazwisko);
});

/* Parzyste, nieparzyste */

var tablica = [1,2,3,4,5, 6, 7, 8, 9, 10];

for (var i = 0; i<tablica.length; i++) {
    
    if (tablica[i]%2 == 0) {
        console.log(tablica[i] + ' jest parzysta');
    } else {
        console.log(tablica[i] + 'jest nieparzysta ');
    }

    //if (i == 100) break;
}
