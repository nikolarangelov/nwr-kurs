/**
 *
 * JS - DOM Methods
 *
 */

/**
 * Dobijanje vrednosti atributa
 */
 const lista = document.getElementById('lista');

 // getAttribute(attributeName)
 const idListe = lista.getAttribute('id');
 
 console.log('Vrednost ID atributa za listu je: ', idListe);
 
 /** citanje hrefa za google link */
 const googleLinkovi = document.getElementsByClassName('google-link');
 const googleLinkoviNiz = ['link1', 'link2', 'link3', 'link4'];
 
 /** Prolazak kroz selektovane elemente */
 
 /** 
  * for
  * forEach
  * for of
  * for in
  * while
  * do while
  */
 
 for (let link of googleLinkovi) {
     const hrefVrednost = link.getAttribute('href');
     const linkTarget = link.getAttribute('target');
     const linkText = link.innerText;
     console.log(hrefVrednost, linkText, linkTarget);
 }
 
 /** POGRESAN NACIN NE POSTOJI METODA FOREACH */
 // googleLinkovi.forEach((link) => {
 //     console.log(link);
 // })
 
 // googleLinkovi.forEach(function() {
 
 // })
 
 /**
  * Kreiranje ili izmena postojeceg HTML atributa nekog elementa
  */
 /**
  * getElementById
  * getElementsByClassName
  * getELementsByTagName
  * querySelector
  * querySelectorAll
  */
 
 
 const noviLink = document.querySelector('#new > a');
 console.log(noviLink);
 
 /** setAttribute(attributeName, attributeValue) */
 noviLink.setAttribute('href', 'https://novilink.rs');
 
 /** Zadatak 1
  *
  * za novi link dodati target="_blank" i klasu .google-link i promeniti tekst u "Novi link do stranice"
  *
  */
 
 noviLink.setAttribute('target', '_blank');
 noviLink.setAttribute('class', 'google-link');
 noviLink.textContent = 'Novi link do stranice';
 
 /**Zadatak2 tooltip*/
 
 const tooltipElement = document.querySelector('[data-tooltip]');
 const tooltipContainer = document.querySelector('#tooltip');
 
 function tooltip(event) {
     const text = tooltipElement.getAttribute('data-content');
     tooltipContainer.innerText = text;
     tooltipContainer.style.display = 'block';
 };

 /** Brisanje atributa HTMl elemenata
  * metoda: removeAttribute(attributeName);
  * 
  */

 const slika = document.getElementsByClassName('img')[0];

function removeSrc(){
    slika.removeAttribute('src');
}

console.clear();
/*** src vrednost */
console.log(slika.getAttribute('src')); //prvi nacin

/** Promena src vrednosti */
console.log(slika.setAttribute('src', 'https://picsum.photos/500'));

// drugi nacin

slika.src = 'https://picsum.photos/750'
