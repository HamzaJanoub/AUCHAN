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

    if (!draggeProduct || !draggeProduct.prix) return;


    const produit = document.createElement("div");

    produit.innerHTML = `
        <button class="deleteButton flex self-end ml-auto hover:bg-gray-300 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#EA3323">
                <path d="M7,21q-0.82,0-1.41-0.59T5,19V6H4V4H9V3h6V4h5V6H19V19q0,0.82-0.59,1.41T17,21H7ZM17,6H7V19H17V6ZM9,17h2V8H9v9Zm4,0h2V8H13v9ZM7,6V19V6Z"/>
            </svg>
        </button>

        <img src="${draggeProduct.image}" class="w-40 rounded-md m-1">

        <div class="flex flex-col">
            <p class="p-2 font-bold">${draggeProduct.nom}</p>
            <p class="p-2">${draggeProduct.description}</p>
            <p class="p-2 text-red-500 font-semibold">${draggeProduct.prix} DH</p>
            <span>Quantité : 1</span>
            <span>============================</span>
        </div>
    `;

    panier.append(produit);

    const prixProduit = Number(draggeProduct.prix);
    total += prixProduit;
    totalElement.forEach((ele) => {
        ele.textContent = `${total.toFixed(2)} DH`;
    });



    const deleteB = produit.querySelector(".deleteButton");
    deleteB.addEventListener("click", () => {
        total -= prixProduit;
        totalElement.forEach((ele) => {
            ele.textContent = `${total.toFixed(2)} DH`;
        });
        produit.remove();
    });

});
}



