import { fetchData } from "./api.js";


let currentPage = 1;
const itemsPerPage = 12;

const products = JSON.parse(localStorage.getItem("datastock")) ;
export function show() {
  const container = document.getElementById("produits-place");
  const numberPage = document.getElementById("number-page");
  const preBtn = document.getElementById("pre-btn");
  const nextBtn = document.getElementById("next-btn");
  const select = document.getElementById("select-categorie");
  const searchByName = document.getElementById("search-barre");

  function render() {
    container.innerHTML = "";
    let start = (currentPage - 1) * itemsPerPage;
    let filterProducte = filterbyCategorie(products, select.value);
        filterProducte =filterByName(filterProducte,searchByName.value)
    const pageProducts = filterProducte.slice(start, start + itemsPerPage);

    pageProducts.map((data) => {
      let card = document.createElement("div");
      card.innerHTML = `
                    <img class="w-full h-32 object-contain " src="${data.image}" draggable = 'false'>
                    <div class="flex flex-col pt-2 flex-1  gap-3">
                      <h2 class="pl-2 font-bold">${data.nom}</h2>
                      <p class="pl-2">${data.description}</p>
                      <p class="pl-2 text-red-500 font-semibold">${data.prix} DH</p>
                      <button class="add-to-card bg-emerald-100 text-emerald-600 rounded-lg p-2 hover:bg-emerald-400 hover hover:text-white flex mt-auto "> + Ajouter au panier  </button>
                    </div>
                `;
      card.classList.add(
        "price",
        "bg-white",
        "rounded-xl",
        "p-3",
        "shadow",
        "w-full",
        "min-w-0",
        "min-h-72",
        "overflow-hidden",
        "flex",
        "flex-col",
        "duration-300",
        "hover:-translate-y-1",
        "hover:shadow-lg",
        "hover:shadow-red-200",
      );

      card.draggable = true
      card.dataset.image=data.image
      card.dataset.nom = data.nom
      card.dataset.description=data.description
      card.dataset.prix=data.prix

      container.append(card);


    });
    let totalePage = Math.ceil(filterProducte.length / itemsPerPage);
    numberPage.textContent = currentPage;
    preBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage >= totalePage;
  }
  preBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      render();
    }
  });
  nextBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
      currentPage++;
      render();
    }
  });
  select.addEventListener("change", () => {
    currentPage = 1;
    render();
  });
  searchByName.addEventListener("input",()=>{
  currentPage=1;
  render()
  });
  render();
}
fetchData();

function filterbyCategorie(products, categorie) {
  return products.filter((data) => {
    return categorie === "all" || data.categorie === categorie;
  });
}


function filterByName(products,search){
 return products.filter((data) => {
  return data.nom.toLowerCase().startsWith(search.toLowerCase())
});
}



