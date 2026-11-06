const btn = document.getElementById("pop-up-btn");
const popUp = document.getElementById("pop-up");
const panier = document.getElementById("panier-place");
const container = document.getElementById("produits-place");
const totalElement = document.querySelectorAll(".total-prix");
let draggeProduct = [];
export function paniers() {
  let total = 0;
  btn.addEventListener("click", () => {
    popUp.classList.remove("hidden");
  });
  popUp.addEventListener("click", (e) => {
    if (e.target === popUp) popUp.classList.add("hidden");
  });

  container.addEventListener("dragstart", (e) => {
    draggeProduct = {
      image: e.target.dataset.image,
      nom: e.target.dataset.nom,
      description: e.target.dataset.description,
      prix: e.target.dataset.prix,
    };
  });
  btn.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("push");
  });
  btn.addEventListener("drop", (e) => {
    e.preventDefault();
    if (!draggeProduct) return;
    const produit = document.createElement("div");
    produit.innerHTML = `
    
       <img src="${draggeProduct.image}" alt="produit haribo" class="w-40 rounded-md m-1">
       <div class="flex flex-col ">
           <p class="p-2 font-bold">${draggeProduct.nom}</p>
           <p class="p-2">${draggeProduct.description}</p>
           <p class="p-2 text-red-500 font-semibold"> ${draggeProduct.prix} DH</p>
            <span>quantité :<span class="quantitéN">1</span></span>
       </div>
    `;
    e.stopPropagation();
    panier.append(produit);

    function ajouterAuTotal(prix) {
      total += Number(prix);
      totalElement.forEach((ele) => {
        ele.textContent = `${total.toFixed(2)} DH`;
      });
    }
    ajouterAuTotal(draggeProduct.prix);
  });
}
