const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle.addEventListener("click", () => {
  siteNav.classList.toggle("is-open");
});

document.querySelector("#current-year").textContent = new Date().getFullYear();