/**
 * Object
 */

const mojObjekat1 = {ime:'Nikola'};
const mojObjekat = Object({ime:'Nikola'});
console.log(mojObjekat, mojObjekat1);

// Get Keys

const keys = Object.keys(mojObjekat);
const kljuc = keys[0];
console.log(kljuc);

// Jos jedan nacin stampanja vrednosti svojstva iz objekta

console.log(mojObjekat.ime);

console.log(mojObjekat['ime']);

let poruka = {
    id:1234,
    vremeKreiranja: '2/2/2021',
    opis: 'lorem ipsum',
    korisnik:'Nikola Rangelov',
    a: 10,
    b: 15,
    c: 20
};

let odabirKorisnika = 'b';
console.log(`Vrednost iz objekta poruka na osnovu
 odabira korisnika: ${poruka[odabirKorisnika]}`);

 // dobijanje kljuceva iz objekta Poruka

 const keysPoruka = Object.keys(poruka);
 console.log(keysPoruka);