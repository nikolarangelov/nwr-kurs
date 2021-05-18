/** For petlja zadatak 1 */

// for (let i = 0; i <= 100; i++) {

//     if ( i % 3 == 0) {
//         console.log(i);
//     } else{
//         console.log(`Broj ${i} nije deljiv brojem 3`);
//     }

// }
// continue

for (let i = 0; i <= 100; i++) {

    if ( i % 3 == 0) {
        console.log(i);
        continue;
    } 
        console.log(`Broj ${i} nije deljiv brojem 3`);
    

}

/** Sabrati sve brojeve od 1 do 100 pod uslovom da zbir 
 * svih brojeva ne predje broj 300
 * Zadtak uraditi koristeci WHILE petlju
 */
console.clear();
let i = 1;
let zbir = 0;
let sviBrojevi = [];

// zbir = zbir + broj


while(i <= 100) {
    zbir += i;
    sviBrojevi.push(i);

    if (zbir >= 300) {
        break;
    }
    i++
}
console.log(zbir);
console.log(sviBrojevi.join(', '));

/**
 * Zadatak 3
 * 
 * a) Napisati funkciju koja stampa za svaki 
 * element u nizu 'name' i email
 *  
 * for of
 * 
 * b) Napisati funkciju koja stampa sva svojstva 
 * objekta pojednicno 
 * za svaki element iz niza.
 * 
 * for of
 * for in
 * 
 * 
 */
console.clear();

 const podaci = [
    {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        postId: 1,
        id: 2,
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
        body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
        postId: 1,
        id: 3,
        name: "odio adipisci rerum aut animi",
        email: "Nikita@garfield.biz",
        body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
        postId: 1,
        id: 4,
        name: "alias odio sit",
        email: "Lew@alysha.tv",
        body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
        postId: 1,
        id: 5,
        name: "vero eaque aliquid doloribus et culpa",
        email: "Hayden@althea.biz",
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    }
];

function printNameEmail(){
    for (let nameMail of podaci) {
        console.log(`Ovo je ime: ${nameMail.name}, 
                    a ovo je email ${nameMail.email}`);
    };
}

function printAll() {
    for (let sviPodaci of podaci){
        console.log(`   PostID: ${sviPodaci.postId}
                    ID: ${sviPodaci.id}
                    Name: ${sviPodaci.name}
                    Email: ${sviPodaci.email}
                    Body: ${sviPodaci.body}`)
    }
}
printNameEmail();
printAll();