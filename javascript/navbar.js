const hamburgerBtn = document.querySelector(".hamburger-menu-btn");
const navMenu = document.querySelector(".nav-menu");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
