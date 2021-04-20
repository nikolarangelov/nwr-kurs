// Objekti

let objekat = {}; //objekt

/*
Definisanje objekta
{key: value}
*/

objekat = {
    ime: `Nikola`,
    prezime: `Rangelov`,
    godRodjenja: 1999,
    mere: {
        visina: 175,
        tezina: 80
    
    }
};


// console.log(objekat);
// Pristupanje nekoj vrednosti se vrsi preko operatora .
console.log(objekat.ime);
console.log(objekat.mere.visina);

let osoba = {
    ime: `Nikola`,
    prezime: `Rangelov`
};
 document.write(`Ime osobe je: ${osoba.ime}, <br>
 prezime osobe je ${osoba.prezime}`);
let ime = `Pera`;
 ime = `novo ime`;
 console.log(ime);                
 osoba.ime = `Pera`;
 // Funckije u sklopu objekta

 let proracun = {
     a: 10,
     b: 5,
     izracunaj: function(){
         console.log(this.a, this.b);
         const zbir = this.a + this.b;
         console.log(zbir);
         return zbir 
     }
 };
 function izracunaj(){
     console.log('.....racunanje u toku');
 }
 izracunaj();
 const zbir = proracun.izracunaj();
 console.log(`Ovo je zbir: ${zbir}.`);
 
 //  Shadow varijabla 
 
 let automobil = `Audi`;
 function markaAutomobila(){
    let automobil = `BMW`;
    console.log(automobil.model);
 };
 markaAutomobila();
 console.log(automobil);

 /**
  * Zadatak 2
  */
let Automobil = {
    model: 'Audi',
    marka: 'A3',
    GodinaProizvodnje: 2020,
    brVrata: 5,
    Boja: 'Crna', 
    osnovniPodaci: function() {
       return `Model: ${this.model};
       marka: ${this.marka};
       godina proizvodnje: ${this.GodinaProizvodnje};
       broj vrata: ${this.brVrata};
       Boja: ${this.Boja}`
    }
   
};
console.log(Automobil.osnovniPodaci());