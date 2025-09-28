const menuBtn = document.getElementById("menu_icon");   
const navLinks = document.getElementById("nav_links");
           

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.addEventListener("class", isOpen ? "ri-close-line" : "ri-mine-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})