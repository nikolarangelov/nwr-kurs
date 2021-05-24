/**Switch Case */

switch(10) {
    case 1:
        console.log(1);
        break;
    case 10:
        console.log(5);
    case 10:
        console.log(10);
        break;
    default:
        console.log('Neki drugi slucaj');

}

/**Zadatak 1 */

const broj = 0;

let nizBrojeva = [];
switch(broj) {
    case 1:
        console.log('Jedan');
        break;
    case 2:
        console.log('Dva');
        break;
    case 3:
        console.log('Tri');
        break;
    case 4:
        console.log('Četiri');
        break;
    case 5:
        console.log('Pet');
        break;
    default:
        console.log('Slučaj nije pronađen!')
}
/** Zadatak 2 */

function odabirBroja(broj) {
    switch(broj) {
        case 1:
            nizBrojeva.push('Jedan');
            break;
        case 2:
            nizBrojeva.push('Dva');
            break;
        case 3:
            nizBrojeva.push('Tri');
            break;
        case 4:
            nizBrojeva.push('Četiri');
            break;
        case 5:
            nizBrojeva.push('Pet');
            break;
        case 6:
            nizBrojeva.push('Šest');
            break;
        case 7:
            nizBrojeva.push('Sedam');
            break;
        case 8:
            nizBrojeva.push('Osam');
            break;
        case 9:
            nizBrojeva.push('Devet');
            break;
        case 0:
            nizBrojeva.push('Nula');
            break;
    }
    
    const noviFormat = nizBrojeva.join('-');
    document.querySelector('#odabraniBrojevi').innerHTML = noviFormat;
}

/** Primene switch case kod datuma */

const trenutniDan = new Date('2021-04-02').getDay();


switch(trenutniDan) {
    case 0:
        console.log('Nedelja');
        break;
    case 1:
        console.log('Ponedeljak');
        break;
    case 2:
        console.log('Utorak');
        break;
    case 3:
        console.log('Sreda');
        break;
    case 4:
        console.log('Četvrtak');
        break;
    case 5:
        console.log('Petak');
        break;
    case 6:
        console.log('Subota');
        break;
        
}



