// //Opseg vazenja funkcija promenljivih

// let globalna = 10;

// function globalnaFunkcija(){

//     let lokalnaPromenljiva = 5;
//     //globalna funkcija
//     console.log(`Globalna-------------------`);
//     console.log(globalna);
//     console.log(`Globalna-------------------`);
//     console.log(`${lokalnaPromenljiva}, ovo je lokalna promenljiva`);

//     //lokalna funkcija

//     function globalaFunkcija() {
//         let lokalnaPromenljiva = 5;
//         var varPromenljiva = 10;
    
//         // globalna funkcija
//         console.log('===== globalna funkcija =====');
//         console.log('let', globala);
//         console.log('let', lokalnaPromenljiva);
//         console.log('var', varPromenljiva);
//         console.log('===== globalna funkcija =====');
    
//         lokalnaFunkcija();
    
//         if (true) {
//             var test = 1;
//             let test1 = 2;
//         }
    
//         console.log(test);
    
//         function lokalnaFunkcija() {
//             console.log('lokalna funkcija');
//             console.log('lokalna funkcija:', lokalnaPromenljiva);
//         }
//     }
    



// }
// globalnaFunkcija();
// console.log(globalna);

//zadatak a--------------------------------
let ime = `Nikola`;
let prezime = `Rangelov`;
let godRodjenja = 1999;
let omiljenaBoja = `plava`;

//------------------------------------------
// zadatak b-----------------
function odstampaj(){
    console.log(`Ime: ${ime}`);
    console.log(`Prezime: ${prezime}`);
    console.log(`Godina rođenja: ${godRodjenja}`);
    console.log(`Omiljena boja: ${omiljenaBoja}`);
}
odstampaj();