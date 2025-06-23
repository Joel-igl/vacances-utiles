// js/main.js
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.fontWeight = 'bold';
    link.style.borderBottom = '2px solid #ffdd57';
  }
});
// surligner le lien actif du menu
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.style.borderBottom = "2px solid #ffdd57";
      link.style.fontWeight = "bold";
    }
  });
});
// Apparition au scroll
const revealElements = document.querySelectorAll("section, .module");

const showOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
