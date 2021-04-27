let recenica = 'Lorem Ipsum';
// Broj karaktera

recenica.length;
console.log('Broj karaktera u našoj rečenici', recenica, 'je', recenica.length);

// Trazenje pozicije za poslednji niz karaktera unutar recenice

let quote = 'Jednom kad prestanete da učite, počinjete da umirete.';

let pozicijaTrazenjaReci = quote.indexOf('m');
let pozicijaPoslednjeReci = quote.lastIndexOf('e');

console.log('Trazena pozicija je', pozicijaTrazenjaReci);
console.log('Trazena pozicija za poslednju rec je ', pozicijaPoslednjeReci);

console.log(quote.search('e'));

// Izvlacenje delova iz recenice na osnovu pozicije
// slice(start---end);

console.log(quote.slice(25,30), quote.slice(6,10));

console.log(quote.substring(25,30));
console.log(quote.substr(-28,-23));

/** Zadatak 1
 * A)
 * Odstampati duzinu karaktera u recenici: 
 * I would teach peace rather than war. I would 
 * inculcate love rather than hate.
B)
Odstampati pocetnu poziciju reci 'love'
C)
Koristeci metodu substr() odstampati rec 'love'
D) 
Koristeci metodu slice pomocu negativnih vrednosti 
za pocentu i krajnju poziciju
odstampati rec 'peace'.
 */

// A)
let recenica1 = 'I would teach peace rather than war. I would inculcate love rather than hate.';
 console.log('Broj karaktera u recenici je: ', recenica1.length);

 // B)
 console.log('Pocetna pozicija reci Love je ', recenica1.indexOf('love'));

// C)
console.log(recenica1.substr(55,4));

// D)
console.log(recenica1.slice(-63,-58));


