var kaja = {
    imie: "kaja",
    wzrost: 152,
    przedstawOsobe: function () 
    {console.log(this.imie)}
}

var krystian = {
    imie: "krystian",
    wzrost: 180,
    przedstawOsobe: function () 
    {console.log(this.imie)}
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();

console.log(kaja.wzrost);
console.log(krystian.wzrost);

kaja.wiek = 15;
console.log(kaja.wiek);
console.log(kaja);

function Osoba(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wzrost;
    this.oczy;
    this.wyswietlInfo = function () {
        console.log ("Imię: " + this.imie + "\n" + "Nazwisko: " + this.nazwisko + "\n" + "Wzrost: " + this.wzrost + "\n" + "Oczy: " + this.oczy);
    }
}

var krystian = new Osoba ('Krystian', 'Dziopa');

krystian.wzrost = 180;
krystian.oczy = "niebieskie";

krystian.wyswietlInfo();

var kaja = new Osoba ('Kaja', 'Źrebak');
kaja.wyswietlInfo();


/* Obliczanie BMI - kalkulator */

function Person(imie, waga, wzrost) {
    this.imie = imie;
    this.waga = waga;
    this.wzrost = wzrost;
    this.bmi = function () {
        return this.waga / Math.pow(this.wzrost, 2);
    }
}
var zygmunt = new Person ('zygmunt', 64, 1.66);


console.log(zygmunt.imie + " Twoje BMI to " + zygmunt.bmi());






console.log(zygmunt.imie + " Twoje BMI to " + zygmunt.bmi());