// Funkcije

/**
 * 
 * Deklarisanje funkcije
 *  functon<ime_funkcija>(){
 * }
 */


//Kreiranje funkcije
let ime = `Nikola`;
function mojaPrvaFunkcija(){
    console.log(`Moja prva funkcija se izvršila!`);
}
//----------------------
//Pozivanje funkcije
mojaPrvaFunkcija();
//----------------------
function sabiranje(){
    console.log(`sabiranje 1`);
    console.log(`sabiranje 2`);
    console.log(`sabiranje 3`);
    return 2 + 2;   //nakon return se izvrsavanje zavrsava, kod se prekida
    console.log(`sabiranje 5`);
    console.log(`sabiranje 6`);
}
console.log(sabiranje());