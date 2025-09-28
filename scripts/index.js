const menuBtn = document.getElementById("menu_btn");   
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

//scrollReveal

const scrollRevealOption = {
  distance : "50",
  origin : "bottom",
  duration : 1000,
}

//Header container

scrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
});

