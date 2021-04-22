/**
 * Primer 1 - Obnavljanje Objekata, Nizova, Funkcija
 */
/**
 * 
 *  { value: key, value1: key1, value2: key2 }
 * 
 */
 let a = 0;
 let kvadrat = {
     visina: 120,
     sirina: 130
 };
 
 kvadrat.visina; // 100
 kvadrat.sirina; // 100
 a = 10;
 
 let spanSirina = document.getElementById('sirina'); // HTMLElement (objekat)
 let spanVisina = document.getElementById('visina');
 
 console.log(spanSirina.innerHTML); // citanje vrednosti koja je upisana u html element
 
 spanSirina.innerHTML = `<strong>InnerHTML!</strong>`;
 spanSirina.innerText = '<strong>InnerHTML!</strong>';
 spanSirina.textContent = '<script type="text/javascript">console.log("test");</script>';
 
 spanSirina.innerText = kvadrat.sirina;
 spanVisina.innerText = kvadrat.visina;
 
 /**
  * 
  * Napisati funkciju za stampanje svojstva objekta u HTML elementima 
  * na stranici. 
  * 
  */
 
 let predmet = {
     id: 12345,
     naziv: 'kutija',
     opis: 'lorem ipsum',
     dimenzije: {
         visina: 520,
         sirina: 20,
         jedinica_dimenzije: 'cm'
     },
     tezina: 50,
     jedinicaTezine: 'kg'
 };
 let spanId = document.getElementById('id');
 let spanNaziv = document.getElementById('naziv');
 let spanOpis = document.getElementById('opis');
 let spanDimenzije = document.getElementById('dimenzije');
 let spanTezina = document.getElementById('tezina');
 spanId.innerHTML = predmet.id;
 spanNaziv.innerHTML = predmet.naziv;
 spanOpis.innerHTML = predmet.opis;
 spanDimenzije.innerHTML = predmet.dimenzije.visina;
 spanDimenzije.innerHTML = predmet.dimenzije.sirina;
 spanDimenzije.innerHTML = predmet.dimenzije.jedinica_dimenzije;
 spanTezina.innerHTML = predmet.tezina;
 

