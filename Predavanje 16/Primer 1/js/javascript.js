/**
 * Kontrola toka IF/ELSE 
 */

let x = 4;

/**Primer jedan */

if(x < 5){
    console.log(`Prosledjeni broj ${x} je manji od broja pet`)
};

/**Primer dva */

if (x < 3){
    console.log(`Prosleđeni broj ${x}  je manji od broja 3`)
} else {
    console.log(`Prosleđeni broj ${x}  je veći od broja 3`)
}

/**Primer 3 */

if (x < 5){
    console.log(`Manji od pet`)
} else if (x == 5){
    console.log(`Jednak broju pet`)
}else{
    console.log(`Veći od pet`) // ukoliko ni jedna od prethodnih grana nije izvrsena, izvrsice se ova
}
/**Zadatak 1 */

// function ispitivanje(){
//     const inputPolje = parseInt(document.getElementById('broj').value);
//     if (isNaN(document.getElementById('broj').value)){
//         console.log('Morate uneti numeričku vrednost')
//     } else{
//         if (inputPolje < 5){
//             console.log(`Uneti broj ${inputPolje} je manji od broja 5`)
//         } else if(inputPolje == 5) {
//             console.log(`Uneti broj ${inputPolje} je jedank broju 5`)
//         } else{
//             console.log(`Uneti broj ${inputPolje} je veći od broja 5`)
//         }
//     }

// }

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

function ispitivanje(){
    const inputPolje = parseInt(document.getElementById('broj').value);
    if (isNaN(document.getElementById('broj').value)){
                console.log('Morate uneti numeričku vrednost')
            } else{
               if (inputPolje == 1){
                document.body.style.backgroundColor = "#2ecc71";
               } else if(inputPolje == 2){
                document.body.style.backgroundColor = " #2980b9";
               } else if(inputPolje == 3){
                document.body.style.backgroundColor = " #8e44ad";
               } else if(inputPolje == 4){
                document.body.style.backgroundColor = " #e67e22";
               } else if(inputPolje == 5){
                document.body.style.backgroundColor = " #e74c3c";
               } else if(inputPolje == 6){
                document.body.style.backgroundColor = " #34495e";
               } else if(inputPolje == 7){
                document.body.style.backgroundColor = " #95a5a6";
               } else{
                   document.write('Morate uneti broj od jedan do sedam')
               }
            }
}
function broj1(){
    document.body.style.backgroundColor = "#2ecc71";
}
function broj2(){
    document.body.style.backgroundColor = "#2980b9";
}
function broj3(){
    document.body.style.backgroundColor = " #8e44ad";
}
function broj4(){
    document.body.style.backgroundColor = " #e67e22";
}
function broj5(){
    document.body.style.backgroundColor = " #e74c3c";
}
function broj6(){
    document.body.style.backgroundColor = " #34495e";
}
function broj7(){
    document.body.style.backgroundColor = " #95a5a6";
}
