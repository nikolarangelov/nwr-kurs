/**
 * DOM Selectors
 */

// select element by id

const paragraf = document.getElementById('primer');
console.log(paragraf);

// select elements by CSS selection

const cssSelecton = document.querySelector('#primer');

// Select all elements that match CSS selection

const allParagraphs = document.querySelectorAll('p');

allParagraphs.forEach(function(trenutnaVrednost, trenutniIndex, lista) {
    console.log(trenutnaVrednost);
    console.log(trenutniIndex);
    console.log(lista);
})