const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__list");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectorAll(".header__link").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
}))