const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querrySelectorAll(".nav-catelogue-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
}))