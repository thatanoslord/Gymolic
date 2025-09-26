const menuBtn = document.getElementById("menu_icon");   // underscore not dash
const navLinks = document.getElementById("nav_links");
const menuIcon = menuBtn.querySelector("i");            // grab the <i> inside

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  // toggle the icon class
  if (navLinks.classList.contains("open")) {
    menuIcon.classList.replace("ri-menu-line", "ri-close-line");
  } else {
    menuIcon.classList.replace("ri-close-line", "ri-menu-line");
  }
});
