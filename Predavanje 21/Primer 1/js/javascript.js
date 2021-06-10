/** DOM */

/**************************************
 *  getElementById
 **************************************/

const elementById = document.getElementById('lista');
console.log(elementById);

elementById.style.listStyle = 'none';

const ulPadding = elementById.style.padding;
const ulMargin = elementById.style.margin;
console.log('UL padding: ', ulPadding);
console.log('UL margin: ', ulMargin);

/***
 * querySelector
 */
const queryLista = document.querySelector('#lista');

const queryAllLista = document.querySelector('input[data-value*="vrednost"]'); // ovakav odabir se koristi i u css-u

console.log('Query Input: ', queryAllLista);

// Selekcija li unutar liste

const li = queryLista.querySelector('.treci');
console.log('List item sa klasom #treci unutar liste: ', li);

console.clear();

const queryAllInputs = document.querySelectorAll('input[data-value*="vrednost"]');

console.log('all', queryAllInputs);

console.log('treci element iz niza ', queryAllInputs.item(2));

// prolazak kroz sva input polja | |queryAllInputs.forEach(function(element, index, niz))

queryAllInputs.forEach(function(element, index, niz){

});


objekat = {
    allInputs: document.querySelectorAll('input'),
    forEach: function(callback) {
        const element = 'element';
        const index = 1;
        const array = [];
        callback(element, index, array)
    }
}
objekat.forEach(function (input) {console.log(input)});





//ES6 - isto kao prethodni samo noviji i pregledniji i laksi
// queryAllInputs.forEach((input) =>{
//     console.log(input)
// });  