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