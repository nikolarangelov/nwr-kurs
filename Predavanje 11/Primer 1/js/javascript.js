//const, let, var


const brojPi = 3.14;
//broj pi = 3.15 // greska

let automobil = `Mazda`;
//`audi` = `mazda` --zabranjeno

let modelAutomobila = `RX-8`;

console.log(automobil,`, model automobila: `, modelAutomobila);

automobil = `Audi`;
modelAutomobila = `R-8`;

console.log(automobil, `model automobila: `, modelAutomobila);



console.log(`${automobil}, model automobila:${modelAutomobila} .`); //najbolji nacin jer mozemo dodati stringove unutar zagrada 
                                                                  // i razmake koji ce se ocitavati kao vidjeni.
//Funkcije

function nazivFunkcije(){
    console.log(`Moja funkcija je pozvana!`)
}
nazivFunkcije();