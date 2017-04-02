'use strict';

var liczba1 = 13, liczba2 = 5;

var wynik;

wynik = liczba1 % liczba2;
console.log(wynik);
liczba1 += liczba2; /* operator += liczba1= liczba1 + liczba2 tozsamy zapis */
console.log(liczba1);


var liczba3 = 4;
var liczba4 = 4;
if (liczba3 == liczba4) {
    console.log('Liczby są równe') /* nastepuje koniec sprawdzania warunku wartosc przyjmuje wartosc true */
} else if (liczba3 === liczba4) {
    console.log('liczby sa identyczne');
}

/* operator logiczny */ /* and dwa musza byc prawdziwe w or II musi byc spelniony jeden warunek */

var liczba5 = 10; /* nasza liczba jest równa 10 -prawda dzieli sie przez 2 - prawda*/
if (liczba5 == 10 && liczba5%2 == 0) {
    console.log('Operatory logiczne');
}

/* Operatory warunkowe */

(2>5) ? console.log("tak") : console.log("nie"); /* tozsame z if*/