function multiply(parametr1, parametr2, parametr3) {
    var result;
    
    result = parametr1 * parametr2 * parametr3;
    
    return result;
}

console.log("Wynik: " + multiply(3, 9, 10));

var funkcja = function () {
    return "wynik";
}

console.log(funkcja);
console.log (funkcja());

/* Funkcja, która pobiera jako argument promien kola dodatkowo liczy obwód i pole kola */

function poleKolaObwodKola(promien) {
    var poleKola;
    var obwodKola;
    
    poleKola = Math.PI * Math.pow(promien, 2);
    
    obwodKola = 2 * Math.PI * promien;
    
   
    return "Dla kola o promieniu " + promien + " pole wynosi " + poleKola + " ora obwod wynosi: " + obwodKola;
}

console.log(poleKolaObwodKola(3));
console.log(poleKolaObwodKola(2));
console.log(poleKolaObwodKola(5));
console.log(poleKolaObwodKola(10));
