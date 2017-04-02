var imie;               /* <-- Funkcja globalna */
var imieDamskie="Kaja";
var wiek = 37;

var kolor="czerwony";

imie = "Sergio";

imie = imieDamskie;

//console.log(imie);
//console.log(kolor);
//console.log(wiek);

function wyswietlZmienna() { /*<-- Funkcja lokalna, jeśli usuniemy słowo var przekształca funkcję w fukncję globalną */
    var imie = 180;
    console.log(imie);
}

wyswietlZmienna();

console.log(imie);