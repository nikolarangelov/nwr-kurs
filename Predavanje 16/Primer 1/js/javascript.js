/**
 * 
 * Kontrola toka If Else
 *
 */

/** Osnovni primer grananja koda */
let x = 5;

// primer 1
if (x < 5) {
    console.log(`Prosledjeni broj ${x} je manji od broja 5`);
}

// primer 2
if (x < 3) {
    console.log(`prosledjeni broj ${x} je manji od broja 3`);
} else {
    console.log(`prosledjeni broj ${x} je veci od broja 3`);
}

// primer 3
if (x < 5) {
    console.log('Manji od 5');
} else if (x == 5) {
    console.log('Jednak broju 5');
} else {
    console.log('Veci od 5');
    // ukoliko ni jedna od prethodnih grana nije ispunila uslov
}

/** Zadatak 1 */

/** js DOM selektori
 * 
 * document.querySelector(selekcija);
 * document.getElementById(idElementa);
 * 
 */

function ispitivanje() {
    const inputPolje = parseInt(document.getElementById('broj').value);

    if (isNaN(document.getElementById('broj').value)) {
        console.log('Uneta vrednost nije broj!');
        alert('Uneta vrednost nije broj!');
    } else {

        if (inputPolje < 5) {
            console.log(`Uneti broj ${inputPolje} je manji od broja 5`);
        } else if (inputPolje === 5) {
            console.log(`Uneti broj ${inputPolje} je jednak broju 5`);
        } else {
            console.log(`Uneti broj ${inputPolje} veci od broja 5`);
        }

    }
}

/**
 * Zadatak 2
 *
 * Obojiti boju pozadine u odnosu na prosledjeni broj:
 *
 * 1 - #2ecc71
 * 2 - #2980b9
 * 3 - #8e44ad
 * 4 - #e67e22
 * 5 - #e74c3c
 * 6 - #34495e
 * 7 - #95a5a6
 */

function obojiPozadinu(odabirBoje) {
    // true = 1
    // false = 0
    /**
     *  prvi nacin dodeljivanja jedne ili druge vrednosti zavisno od toga koja postoji
     */
    const boja = odabirBoje || document.getElementById('boja').value;

    /**
     * Drugi nacin
     */
    // let boja;
    // if (odabirBoje) {
    //     boja = odabirBoje;
    // } else {
    //     boja = document.getElementById('boja').value;
    // }

    if (boja == 1) {
        document.body.style.backgroundColor = '#2ecc71';

    } else if (boja == 2) {
        document.body.style.backgroundColor = '#2980b9';

    } else if (boja == 3) {
        document.body.style.backgroundColor = '#8e44ad';

    } else if (boja == 4) {
        document.body.style.backgroundColor = '#e67e22';

    } else if (boja == 5) {
        document.body.style.backgroundColor = '#e74c3c';

    } else if (boja == 6) {
        document.body.style.backgroundColor = '#34495e';

    } else if (boja == 7) {
        document.body.style.backgroundColor = '#95a5a6';

    } else {
        alert('Niste uneli broj u opsegu od 1 - 7');

    }
}


function izbor(odabraniBroj) {
    const boja = odabraniBroj || document.getElementById('boja').value;

    // if (odabraniBroj) {
    //     document.body.style.backgroundColor = odabraniBroj;
    // } else {
    //     document.body.style.backgroundColor = izborIzInputPolja;
    // }

    document.body.style.backgroundColor = boja;
}

izbor('#990000');

/**
 * Ternani operator
 * 
 * uslov ? izraz_tačno : izraz_netačno
 * 
 */

let y = 5;

let rezultat;

// if (y > 5) {
//     rezultat = 'Vece od 5';
// } else {
//     rezultat = 'Manje od 5';
// }

rezultat = y >= 5 ? 'Vece ili jednako 5' : 'Manje od 5';

console.log(rezultat);

/** Primer Switch Case
 * 
 * switch ([izraz]) {
    case [izraz]:
        [naredbe]
    break;
    case [izraz]:
    case [izraz]:
    ...
        [naredbe]
    break;
    default:
    ...
        [naredbe]
    }
 * 
 * 
 */
console.clear();
switch ('b') {
    case 0:
        // naredba 
        console.log('Broj 0')
        break;
    case 1:
        // naredba
        console.log('Broj 1')
        break;
    case 2:
        // naredba
        console.log('Broj 2')
        break;
    case 'a':
        console.log('prosledili ste karakter a');
        break;
    default:
        console.log('Nije pronadjen ni jedan slucaj');
}

switch (1) {
    case 1:
        document.body.style.backgroundColor = '#2ecc71';
        break;
    case 2:
        document.body.style.backgroundColor = '#2980b9';
        break;
    case 3:
        document.body.style.backgroundColor = '#e74c3c';
        break;
    default:
        console.log('Niste prosledili odgovarajuci broj');
}

/**
 * Zadatak 3:
 *
 * Napisati funkciju za svaku od aritmetickih operacija sabiranje, oduzimanje, mnozenje i deljenje
 * zatim pozvati funkciju u zavisnosti od odabira korisnika. Za ispitivanje
 * koristiti switch / case strukturu.
 *
 * Napomena svaka od funkcija prihvata dva broja kao operande i izvrsava artitmeticku
 * operaciju u zavisnosti od izbora.
 *
 *
 */

function sabiranje(a, b){
    return a + b;
}

function oduzimanje(a, b){
    return a - b;
}

function mnozenje(a, b){
    return a * b;
}

function deljenje(a, b){
    return a / b;
}