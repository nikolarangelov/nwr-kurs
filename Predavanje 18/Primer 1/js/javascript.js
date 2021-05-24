/** For Loop (petlja)
 * 
 */

for ( let i = 0; i < 10; i++) {
  //  console.log('Brojac koji se izvsava 10 puta')
    console.log(i)
}

/**
 * Zadatak 1
 * Napisati for petlju koja se izvrsava 20 puta i
 * stampa poruku u sledecem formatu
 * 
 * Interakcija br: <broj_interakcije>
 */
for (let i=1; i < 21; i++) {
    console.log(`Interakcija broj ${i}`)
}
/** Uvecavanje za dva koraka, umesto za samo jedan */

for (let i = 0; i < 10; i += 2) {
    console.log(i);
}
console.clear()

/** Zadatak 2 */

for (let i = 10; i < 100; i += 4) {
    console.log(i);
}

/** Ispitivanje parnosti brojeva */
console.clear();
console.log(10 % 2) // ako vrati 0, broj je paran, ako
                    // vrati 1, broj je neparan

/** Zadatak 3 */

for (let i = 1; i < 100; i ++ ) {
    if ( i % 2 == 0){
        console.log(i, 'Broj je paran') 
    } else {
        console.log( i, 'Broj je neparan')
    }

}

/**
 * For petlja za prolazak kroz niz elemenata
 */
console.clear();
const nizBrojeva = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(nizBrojeva[0]);

for (let i = 0; i < nizBrojeva.length; i++) {
    console.log(nizBrojeva[i]);
}

/** Zadatak 4 */

console.clear();

const nizBrojevaZadatak4 = ['22', '1', '3', '18', '193', '39', '4', '5'];
let zbir = 0;
for ( let i = 0; i < nizBrojevaZadatak4.length; i++) {
    console.log( 'Duplirana vrednost za broj ',  nizBrojevaZadatak4[i], ' je',nizBrojevaZadatak4[i] * 2 );
    console.log(  'Vrednost uvecana za deset za broj ',  nizBrojevaZadatak4[i], ' je',parseInt(nizBrojevaZadatak4[i]) + 10 );
    console.log('======================================');

    zbir += parseInt(nizBrojevaZadatak4[i]);
}
console.log('Zbir svih brojeva je ', zbir)
