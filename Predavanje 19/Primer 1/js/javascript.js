/**
 * For Loop obnavanljanje
 */

for ( let i = 0; i < 5; i++){
    console.log(i);
}
/** Nacin Rada
 * 1. i = 0;
 * 2. ispituje se uslov i < 5;
 * 3. izvrsavanje for petlje (1. loop)
 * 4. Nakon zavrsetka ciklusa (1. loop) uvecava se za 1(i++)
 * 5. Ponovo se vracamo na pocetak petlje i sada se preskace
 * ponovno setovanje i = 0;
 * 6. Ponovo se ispituje uslov, i na kraju ciklusauvecanje za jedan
 * 7. Povavljamo korake 5 i 6 sve dok je nas uslov tacan
 * 8. Ukoliko uslov vise ne bude bio tacan, zavrsava se izvrsavanje petlje
 */

let boje = [
    {
        id: 1,
        name:'red',
        color: '#e74c3c',
        selector: 'crvena'
    },
    
    {
        id: 2,
        name:'yellow',
        color: '#fdcb6e',
        selector: 'zuta'
    },
    
    {
        id: 3,
        name:'green',
        color: '#55efc4',
        selector: 'zelena'
    },

    {
        id: 4,
        name:'blue',
        color: '#74b9ff',
        selector: 'plava'
    }
];

/** Zadatak 1
 * Pomocui for petlje odstampati ID boje i njen naziv u konzoli 
 * u sledecem formatu
 * #1 Red
 */

for (let i = 0; i < boje.length; i++) {
    console.log(`#${boje[i].id} ${boje[i].name}`);

    // vrednosti za selektore i boje

    console.log(`Boja ${boje[i].color} Selektor: ${boje[i].selector}`);
 
    // Slekecija elemanta na osnovu ID-ja

    const el = document.getElementById(boje[i].selector);

    el.style.backgroundColor = boje[i].color;
    el.innerHTML = `${boje[i].id} ${boje[i].name}`
    

}