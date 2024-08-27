const btnMobile = document.getElementById("btn-mobile");
const nav = document.getElementById("nav");
const menuLinks = document.querySelectorAll(".header-menu a");

function toggleMenu(event) {
  event.preventDefault();
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  btnMobile.setAttribute("aria-expanded", active);
  btnMobile.setAttribute("aria-label", active ? "Fechar Menu" : "Abrir Menu");
  
}
function closeMenu() {
  nav.classList.remove("active");
  btnMobile.setAttribute("aria-expanded", "false");
  btnMobile.setAttribute("aria-label", "Abrir Menu");
}

btnMobile.addEventListener("click", toggleMenu);

menuLinks.forEach(link => link.addEventListener("click", closeMenu));