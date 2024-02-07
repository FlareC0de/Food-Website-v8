const hamburger = document.querySelector(".hamb");
const menu = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("clicked");
    menu.classList.toggle("active");
})