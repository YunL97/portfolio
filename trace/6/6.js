const toggleBtn = document.querySelector(".navbar_toogleBtn");
const menu = document.querySelector(".navbar_menu");
const icons = document.querySelector(".navbar_icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active1");
  icons.classList.toggle("active1");
});
