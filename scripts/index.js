const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.addEventListener(
    "class",
    isOpen ? "ri-close-line" : "ri-mine-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

//scrollReveal

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header container
ScrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header_content h4, .header_content .section_header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header_content p", {
  ...scrollRevealOption,
  delay: 1500,
});

// About container
ScrollReveal().reveal(".about_image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about_content .section_header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about_content .section_description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about_card", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

// Pricing section
ScrollReveal().reveal(".price_card", {
  ...scrollRevealOption,
  interval: 500,
});
//Rating swiper
const clientSwiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});