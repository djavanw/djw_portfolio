const burgerEl = document.querySelector("#burger");
const navLinksEl = document.querySelector("#nav-links");


burgerEl.addEventListener("click", () => {
  navLinksEl.classList.toggle("is-active");
});