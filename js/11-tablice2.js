var imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';

//console.log(imiona);

imiona.push('Geralt'); /* Dodaje do tab */


//imiona.pop();/*odejmuje z konca tablicy*/
//imiona.pop();

imiona.unshift('Robert, Krzysztof'); /* dodaje do poczatku tab*/
imiona.shift(); /* usuwa z poczatku tablicy */
console.log(imiona);

console.log(imiona.length); /* sprawdza dlugosc tablicy [5]*/

for (var i = 0; i < imiona.length ; i++) {
    console.log("Index: " + i + "wartosc: " + imiona[i]);
}

imiona.forEach(function (element, index) {
    console.log('Element nr.' + index + ' = ' + element);
});

console.log(imiona.join()); /*Pokazuje imiona po przecinku */

console.log(imiona.reverse()); /* Podaje tablice w odwrotnej kolejności od konca do początku */

var imionaMeskie = ['Robert', 'Mariusz', 'Andrzej'];

var zbiorImion = imionaMeskie.concat(imiona);
console.log(zbiorImion.sort()); /* sortuje imiona alfabetycznie */
/* concat - laczy wszystkie tablice */

console.log(zbiorImion.indexOf("Mariusz")); /* wskazuje pozycje w tablicy */

console.log(Array.isArray(zbiorImion)); /* zwraca prawda, falsz czy dany element jest tablica */

console.log(zbiorImion.slice(2,5)); /* Obcina 2 elementy z lewej do 5 */

console.log(zbiorImion.splice(2, 2)); /* Wytnij elementy od drugiego elementu, dwa elementy */

console.log(zbiorImion);
zbiorImion.splice(2, 2, "Julek", "krzyś"); 
console.log(zbiorImion);
/* od drugiego elementu wytnij dwa i wstaw Julek i Krzys */

console.log(zbiorImion.toString()); /* Przekształca tablice w string */

























