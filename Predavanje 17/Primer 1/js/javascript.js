/**
 * Vezba If else
 *
 */

/** if */

/** 
 * Logicka vrednost - true / false
 * 
 * >, < , >= , <= , == , === , != , !== , &&, || 
 * 
 * "",'', null, undefiend, 0 - false
 * 
 * " ", 'a', {}, [], true, >1, - true
 * 
 */
 const unetaVrednost = document.getElementById('broj');

 const nultaVrednost = null; // false
 const objekat = {}; // true
 const logickaVrednost = false; // false
 const string = 'lorem'; // true
 
 
 function Ispitivanje() {
 
     if (unetaVrednost.value > 10) {
         // blok za izvrsavanje ukoliko je uslov tacan
         console.log('If uslov je ispunjen!, uneti broj je veci od broja 10');
     } else if (unetaVrednost.value == 10) {
         console.log('Uneta vrednost jednaka broju 10');
     } else {
         console.log('If uslov nije ispunjen!, uneti broj je manji od 10');
     }
 
     /** Nije jednako != */
     // 9 != 10 // true
     // 10 != 10 // false
     if (unetaVrednost.value != 10) {
         console.log('Uneta vrednost nije jednaka broju 10');
     } else {
         console.log('Jednak broju 10');
     }
 
 }
 
 /** Nulta vrednost */
 
 /** operator negacije "!" */
 
 /**
  * !true => false
  * !false => true
  */
 
 // !false => true
 if (!nultaVrednost) {
     document.querySelector('#nulta').innerText = 'Ovo je nulta vrednost';
 } else {
     document.querySelector('#nulta').innerText = 'Ovo nije nulta vrednost';
 }
 
 /** Objekat */
 
 if (objekat) {
     document.querySelector('#objekat').innerText = 'Ovo je objekat';
 } else {
     document.querySelector('#objekat').innerText = 'Ovo nije objekat';
 }
 
 /** Logicka vrednost */
 
 if (logickaVrednost) {
     // true
     // ova grana se izvrsava samo u slucaju da je 'logickaVrednost' => true
 } else {
     // false
     // izvrsava se ova grana zbog toga sto je vrednost 'logickaVrednost' => false
 }
 
 
 /** String */
 
 if (string) {
     // true
     document.querySelector('#string').innerText = 'Nije prazan string';
 } else {
     // false
     document.querySelector('#string').innerText = 'Prazan string';
 }
 
 
 /** Logicki operatori vezivanja
  *
  *  ( && - i operator )
  *
  *  ( || - ili operator )
  *
  *  */
 const a = true;
 const b = false;
 const c = true;
 
 
 // true && false => false
 
 console.log(a && b) // false
 console.log(a && c) // true
 console.log(b && c) // false
 
 // true || false => true
 
 console.log(a || b) // true
 console.log(b || c) // true
 console.log(a || c) // true
 
 
 const d = 5;
 const e = 6;
 const f = 10;
 const g = 2;
 const r = 5;
 
 /** Zadatak 1 - logicki operatori */
 
     console.log((d > e)) // false
     console.log((d > e && g < r)) // false
     console.log((g > d)) // false
     console.log((g < f)) // true
     console.log((r == d || f > g)) // true
     
     console.clear()
     // Zadatak 2
       
     console.log( (!((d > e) || (f < g)) && r == d) );               //true
     console.log(((f == g || g < f) && !(e > g)) );                //false
     console.log((!(f > g || d == r) || !((f < e) || (g < r))));  // false 
     console.log(  (d > 2 || g == e && f > e || e < d));           //true
