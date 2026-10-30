import { fetchData } from "./api.js";
let currentPage =1 ;
const itemsPerPage =8 ;

export function show(){
    fetchData().then(products=>{
        const container = document.getElementById
    })
}


















//     let data =JSON.parse(localStorage.getItem('datastock')) || []

// export function show(){
    
//     fetchData()
    
//             const container= document.getElementById('produits-place')
//             data.map(data => {
//                 let card = document.createElement('div')

//                 card.innerHTML = 
//                 `<img class=" w-55" src="${data.image}">
//                 <h2 class="pl-2 font-bold">${data.nom}</h2>
//                 <p class="pl-2 text-red-500 font-semibold">${data.prix } DH</p>`

//                 card.classList.add('bg-white','rounded-xl' ,'p-3', 'm-2', 'shadow','w-fit',  'hover:border-1', 'duration-300', 'hover:-translate-y-1','hover:shadow-lg')
//                 container.append(card)
//             });
//         };
    
// show()






