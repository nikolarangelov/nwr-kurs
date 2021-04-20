/**
 * Povratna vrednost funkcije
 *Return funkcije 
 * 
 */

//  let imeiPrezime = prompt(`Unesite Vaše ime:`,);

 

//  function povratnaVrednost(){
//      return `Uneto ime i prezime je: ${imeiPrezime}`;
     
//  }

//  let rezultatFunkcije = povratnaVrednost();
//  console.log(povratnaVrednost());


//  Referenca na funkciju

let oduzimanje = function(){
    console.log(`oduzimanje `,10+10);
}

oduzimanje();

// Primer 4 - referenca na imenovanu funkciju

let mnozenje = function multi(){
    console.log(`mnozenje `,10 * 10);
}
mnozenje();

// Primer 5 - referenca na već postojeću funkciju

let podeljeniBrojevi = deljenje;

function deljenje(){
    console.log(`deljenje `, 100/10);
}

deljenje();
podeljeniBrojevi();

// Primer 6 - parametri funkcije, kako se predstavljaju i kada se koriste
// functiom <nazivFunkcije> (parametar1....parametar n){ blok funkcije}

console.clear();
function racunanjeBrojGodina(godinaRodjenja, ime, prezime){

    let brojGodina = 2021 - godinaRodjenja;
    console.log(`${ime} ${prezime} ima: ${brojGodina} godine/a!` );
}

racunanjeBrojGodina(1999, `Nikola`, ` Rangelov`);

// Funkcija sa opcionim parametrima
 function generisanjeAutomobila(marka = 'Audi', model = 'RS-6', godinaProizvodnje = '2022'){
    console.log(marka, model, godinaProizvodnje);
 }
 generisanjeAutomobila('BMW', undefined, '522');

 //Zadatak 4

 

function proracunGodineRodjenja(godinaRodjenja){
    
    let brojGodina = 2021 - godinaRodjenja;
    
    
   return `${brojGodina} godina.`;
   
}

function stampaj(ime, prezime, godinaRodjenja){
    document.write(`Za unetog korisnika ${ime} ${prezime}, izracunali smo da ima ${proracunGodineRodjenja(godinaRodjenja)} <br>` );
}
stampaj('Nikola', 'Rangelov', 1999);
stampaj('Marko', 'Marković', 2001);

