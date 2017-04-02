/* Typ liczbowy */

var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata); /* Dodaje obie wartości */

/* Typ - łancuch znaków - string */

var wyplataStr = "Ala ma kota, a kot ma Ale";
var premiaStr = "";
var calkowitaWyplataStr;


calkowitaWyplataStr = wyplataStr + premiaStr;

// Ala ma kota
console.log(calkowitaWyplataStr); /* Pokazuje jako ciąg znaków */

// Uppercase, trim, split(funkcja w ktorej podajemy argument)
var nowyString = calkowitaWyplataStr.split(",");

console.log(nowyString);

/* Typ logiczny - boolean */

var czyJestSmog;
czyJestSmog = false;

if (czyJestSmog) {
    console.log("Jest SMOG");
} else {
    console.log("Nie ma smoga");
}

/* Typy specjalne - undefined i null */

var niezdefiniowanaZmienna;
var nullowaZmienna = null;

console.log(niezdefiniowanaZmienna);
console.log(nullowaZmienna);




