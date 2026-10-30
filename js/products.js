import { fetchData } from "./api.js";
let currentPage = 1;
const itemsPerPage = 8;

export function show() {
  let products = JSON.parse(localStorage.getItem("datastock")) || [];

  const container = document.getElementById("produits-place");
  const numberPage = document.getElementById("number-page");
  const preBtn = document.getElementById("pre-btn");
  const nextBtn = document.getElementById("next-btn");

  function render() {
    container.innerHTML = "";
    let start = (currentPage - 1) * itemsPerPage;

    const pageProducts = products.slice(start, start + itemsPerPage);

    pageProducts.map((data) => {
      let card = document.createElement("div");
      card.innerHTML = `
                    <img class="w-55" src="${data.image}">
                    <h2 class="pl-2 font-bold">${data.nom}</h2>
                    <p class="pl-2 text-red-500 font-semibold">${data.prix} DH</p>
                `;
      card.classList.add(
        "bg-white",
        "rounded-xl",
        "p-3",
        "m-2",
        "shadow",
        "w-fit",
        "duration-300",
        "hover:border-1",
        "hover:-translate-y-1",
        "hover:shadow-lg",
      );
      container.append(card);
    });
    numberPage.textContent = currentPage;
    preBtn.disabled = currentPage === 1;
    nextBtn.disabled =
      currentPage === Math.ceil(products.length / itemsPerPage);
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
  render();
}
fetchData();
