// Promenljive

// definicija nazivDefinicije = vrednost;
// const pi = 3.14;
// const ime = `Nikola`;
// let prezime = `Rangelov`;
// var godinaRođenja = 1999;

// prezime = `Novo prezime`;
// console.log(godinaRođenja);
// console.log(prezime);

//Definisanje promenljivih i naknadno dodeljivanje vrednosti

//Dash notacija pisanja
// let primer_ime;
// let primer_prezime;
// let primer_godina_rodjenja;

//Camel case notacija pisanja
let primerIme;
let primerPrezime;
let primerGodinaRodjenja;
let primerImeiPrezime; 
//let primerImeiPrezime = primerIme + " " + primerPrezime; //rezultat = Nikola Rangelov
// let primerIme, primerPrezime, primerGodinaRodjenja;

primerIme = "Nikola";
primerPrezime = "Rangelov";
primerGodinaRodjenja = 1999;
primerImeiPrezime = `${primerIme} ${primerPrezime}`; //Nikola Rangelov

console.log(typeof primerIme, typeof primerPrezime, typeof primerGodinaRodjenja);

console.log(`

    ime:${primerIme}
    prezime:${primerPrezime}
    godina rodjenja:${primerGodinaRodjenja}
    ime i prezime: ${primerImeiPrezime}

`)
