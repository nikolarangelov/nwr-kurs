let broj = 12345;

console.log('Nas broj je', broj, 'i tip ove promenljive je', typeof broj);

// Konverzija u string

let brojUString = broj.toString();
console.log('Nakon pormene broja u string', brojUString, 'sada je nasa promenljiva sledeceg tipa', typeof brojUString);

// Zaolruzivanje na određenu decimalu

let decimalniBroj = 1.6145;
let zaokruzenaVrednost = decimalniBroj.toFixed(2); // zaokruzivanje na dve decimale
console.log('Zaokruzena vrednost na dve decimale je', zaokruzenaVrednost);

// Konvertovanje u broj

let zbir = broj + zaokruzenaVrednost;

console.log(zbir);

// Parsiranje vrednosti u celobrojne vrednosti ili sa decimalnim zarezom

console.log(parseFloat(zaokruzenaVrednost));
console.log(parseInt(zaokruzenaVrednost));

console.log('Number Constructor', Number (zaokruzenaVrednost));

parseInt('020');      // 20
parseInt('11Nikola');  // 11
parseInt('Nikola11');   // NAN
parseInt('11Nikola20'); // 11

// Number Constants
console.log('Maksimalna vrednost u JS: ', Number.MAX_VALUE);

console.log('Pozitivna beskonacna vrednost je ', Number.POSITIVE_INFINITY,'!');

// Ispitivanje verodostojnosti za broj

console.log(isNaN('1.61')); // false, jer je broj(ispitujemo da li nije broj)
console.log(isNaN('a1.61')); // true, jer nije broj
