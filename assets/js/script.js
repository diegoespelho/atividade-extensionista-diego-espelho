const btnMobile = document.getElementById("btn-mobile");

const nav = document.getElementById("nav");
const menuLinks = document.querySelectorAll(".header-menu a");

function toggleMenu(event) {
  if (event.type === "touchend") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}
function closeMenu() {
  nav.classList.remove("active");
  btnMobile.setAttribute("aria-expanded", "false");
  btnMobile.setAttribute("aria-label", "Abrir Menu");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchend", toggleMenu);

menuLinks.forEach(link => link.addEventListener("click", closeMenu));