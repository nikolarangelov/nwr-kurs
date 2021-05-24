// Array Methods

let niz = ['Jabuka', 'Banana', 'Kruska', 'Kajsija'];
console.log(niz);

/**Prisutpanje elementu niza se radi preko njegovog indexa */

console.log(niz[2]); // vratice kruska

/**Duzina niza */

let duzinaNiza = niz.length;
let string = 'Lorem Ipsum';

console.log(`Duzina naseg niza je: ${duzinaNiza}`);

console.log(`Duzina naseg stringa ${string} je ${string.length}`);

/**Pretvaranje niza u string 
 * Parametri metode join (separator)
 * Separator - string pomocu kojeg ce se spojiti nasi elementi unutar niza
*/

let joinNiz = niz.join(' '); // Jabuka+Banana+Kruska+Kajsija
document.querySelector('#joinRezultat').innerText = joinNiz;

console.log(joinNiz);

/**
 * Spajanje nizova
 * metoda array.concat(array-value)
 * 
 */

let niz1 = [1,2,3,4,5];
let niz2 = [6,7,8,9,10];
console.log(niz1.concat(niz2)); // spojena su oba niza ovom metodom
let SpojeniNiz1iNiz2 = niz1.concat(niz2);
console.log('Ovo su spoejni nizovi jedan i dva', SpojeniNiz1iNiz2);

/**
 * Push metoda - ubacuje nesto na kraju niza
 */
let voca = ['Jabuka','Kruska'];

/**Ubacivanje novog voća na kraju niza */

voca.push('Breskva');
console.log('Ubačeno je novo voće:', voca);

/**Pop metoda - suprotno od push metode, izbacuje nesto iz niza */

let juznoVoce = ['kivi', 'Banana', 'Ananas'];
console.log('Ovo je nepromenjeni niz juznoVoce:', juznoVoce);
juznoVoce.pop(); // metoda ne prihvata nikakve parametre

console.log('Izbacen je poslednji element iz niza juznoVoce', juznoVoce);

/**Unshift - ubacivanje elemenata na pocetak niza */
console.clear();
juznoVoce.unshift('mango');
console.log('Ubacivanje elemenata na pocetak niza', juznoVoce);

/**
 * Shift - izbacivanje elemenata sa pocetka niza
 */


juznoVoce = ['kivi', 'banana', 'ananas'];
juznoVoce.shift();
console.log('Metoda shift - izbacen prvi elemenat (kivi iz niza)', juznoVoce);

/**
 * IndexOf - vraca da li je trazeni element u nizu; ukoliko je pronadjen,
 *  vratiće index tog elementa
 */

let zivotinje = ['pas', 'macka', 'tigar', 'lav'];

let indexZivotinje = zivotinje.indexOf('lav'); // vrača broj tri

console.log(indexZivotinje);


let nizObjekta = [
    {name: 'Nikola'},
    {name: 'Pera'}
];

let pronadjeniObjekat = nizObjekta.indexOf('Nikola');
console.log(pronadjeniObjekat);


/**
 * includes - isto kao indexof, ali vraca true ili false vrednosti za trazene elemente
 */
let includesRezultat = zivotinje.includes('macka');
console.log('Da li se trazeni element macka nalazi u nizu? ', includesRezultat);

/**
 * Map metoda - mapiranje niza, formatiranje niza sa novim vrednostima na osnovu prethodnih
 */

let nizBrojeva = [1, 2, 3, 4, 5];
let rezultatMapFunkcije = nizBrojeva.map( function(trenutniBroj, indexBroja) {
    return trenutniBroj * 10;
} )
console.log('Ovo je rezultat map funkcije ', rezultatMapFunkcije)

let nizObjekta1 = [
    {name: 'Nikola'},
    {name: 'Pera'},
    {name: 'Milica'}
];

let rezultatMapFunkcijeZaObjekte = nizObjekta1.map(function(trenutniObjekat, indexObjekta){
    return trenutniObjekat.name;
});

console.log('Imena iz objekta pomocu MAP funkcije', rezultatMapFunkcijeZaObjekte)

/**
 * Objasnjenje funkcionisanja callback funkcije
 */

function mojaMapFunckija(callback){
    
    const niz = [1,2,3,4];

    niz.forEach(elementNiza => {
        console.log(elementNiza);
    })

   // callback(vrednost, index, niz);
};

mojaMapFunckija(function(){});






/**Zadatak 1 */

let imena = [];              // new Array(); drugi nacina da napravimo niz

function dodavanjeImena(ime){
    imena.push(ime);                                                                                        
};

function stampanjeNizaImena(){
    document.querySelector('#imena').innerText = imena;
};

function dodaj(event){
    const input = document.getElementById(ime);
    dodavanjeImena(input.value);
    
    stampanjeNizaImena();
};

// Dodavanje imena
dodavanjeImena('Nikola');

// stampanje
stampanjeNizaImena();
