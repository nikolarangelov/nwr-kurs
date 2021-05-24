
//*Zadatak 2*/
let a = 10;
let b = 2;
[a, b] = [b, a];
console.log(a, b);
//*********************************** */
/*Zadatak 3****************/



let kvadrat = {
    duzinaStranice:"20cm",
    boja:"zelena",
    pozicijaX:"20px",
    pozicijaY:"30px"
};
function upisVrednosti(){
    document.getElementById("duzinaStranice").innerHTML = kvadrat.duzinaStranice;
    document.getElementById("boja").innerHTML = kvadrat.boja;
    document.getElementById("pozicijaX").innerHTML = kvadrat.pozicijaX;
    document.getElementById("pozicijaY").innerHTML = kvadrat.pozicijaY;
};
upisVrednosti();


document.querySelectorAll('p').forEach(e => e.style.color = "blue");


/************************************************************** */


