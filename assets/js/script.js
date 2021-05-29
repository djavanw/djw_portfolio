// Hamburger Menu
const burgerEl = document.querySelector("#burger");
const navLinksEl = document.querySelector("#nav-links");


burgerEl.addEventListener("click", () => {
  navLinksEl.classList.toggle("is-active");
});

// Modal for works
const modalEl = document.querySelector(".modal");
const btnModalEl = document.querySelector("#btnModal");
const modalCloseEl = document.querySelector(".modal-close");

btnModalEl.addEventListener("click", function() {
  modalEl.style.display = "block"
});

modalCloseEl.addEventListener("click", function() {
  modalEl.style.display = "none";
});

function windowModalOff() {
  modalEl.style.display ="none";
};

window.addEventListener("click", windowModalOff);
// window.addEventListener("click", function(event) {
//   if(event.target.className == "modal-background") {
//     modalEl.style.display = "none"
//   }
// });

