/* HAMBURGER MENU CLICK EVENT LISTENER */
const menuBtn = document.querySelector(".menu-btn");
const menuContent = document.querySelector(".navbar-content");

menuContent.classList.add("hidden");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {

        menuContent.classList.remove("hidden");
        menuContent.classList.add("shown");
        menuBtn.classList.add("open");

        menuOpen = true;
    } else {
        menuContent.classList.remove("shown");
        menuContent.classList.add("hidden");
        menuBtn.classList.remove("open");

        menuOpen = false;
    }
});