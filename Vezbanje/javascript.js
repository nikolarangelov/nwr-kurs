function mojafunkcija(imePrezime, boja){
    document.write(`Omiljena boja korisnika ${imePrezime} je ${boja}`);
};
mojafunkcija(`Nikola Rangelov`, `plava`);

// DRUGI ZADATAK


function proracunGodineRodjenja(godine){
    godRodjenja = 2021 - godine;
    return godRodjenja;
};
document.write(`Za unete godine, procenjena godina rodjenja je: ${proracunGodineRodjenja(22)}`);