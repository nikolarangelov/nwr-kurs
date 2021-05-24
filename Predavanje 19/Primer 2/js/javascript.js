
let i = 0;

while(i < 5) {
    console.log(i);
    i++;
}

let uslov = false;
let brojac = 0; 

// while(uslov){
//     console.log(`While petlja!`);
    
//     if(brojac==19) {
//         break;
//     }


//     brojac ++;
// }

do{
    console.log('Do-While Petlja');
} while (uslov);

/** For Of - Petlja za prolazak kroz nizove */

let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let [i, broj] of niz.entries()) {
    console.log(broj, i);
    // blok
}

/** Zadatak 2
 * pomocu for of petlje odstampati sve elemente niza na HTML stranici
 * jedno ispod drugog
 */
 let imena = [
    'Lyndsay Vanauken',
    'Melanie Montelongo',
    'Jayne Yanes',
    'Terisa Dimmitt',
    'Faustina Bost',
    'Hildegard Trees',
    'Kayleen Westley',]; 

  for (let ime of imena) {

        if(ime == 'Jayne Yanes'){
            continue;
        }
    
        document.getElementById('imena').innerHTML += `${ime} <br>`
  }

  const objekat = {
      id: 1,
      firstName: 'Nikola',
      lastname: 'Rangelov',
      ages: '21',
      location: 'Nis'
  }
  for (let key in objekat) {
      console.log(key);

      console.log(`${objekat[key]}`);
  }
  /** Zadatak 3 */
  console.clear();
  const data = [
    {
        id: 1,
        name: 'Lyndsay Vanauken',
        image: 'https://picsum.photos/250/150',
        createdAt: '2021-05-12',
        description: "1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 2,
        name: 'Melanie Montelongo',
        image: 'https://picsum.photos/250/150',
        createdAt: '2021-05-12',
        description: "2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 3,
        name: 'Jayne Yanes',
        image: 'https://picsum.photos/250/150',
        createdAt: '2021-05-12',
        description: "3Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
];


const cardsDiv = document.querySelector('.cards');

for (let single of data) {
    cardsDiv.innerHTML += `
    <div class="card">
        <img src="${single.image}" alt="">

       <div class="title">
        <div class="name">${single.name}</div>
        <small class="created">${single.createdAt}</small>
       </div>

        <div class="description">
            ${single.description}        
        </div>
    </div>
`
}