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


// What page we're in? Check
console.log("current page: ", document.querySelector("body").id);
const pageId = document.querySelector("body").id;

if (typeof(pageId) != 'undefined' && pageId != null) {
    //const nbCurrentItem1 = document.querySelector("item");
    if (pageId == "ana-sayfa") {
        console.log("ana sayfa");
        let nbItem = document.querySelectorAll(".item1");
        nbItem[0].classList.add("currentpage");
        nbItem[1].classList.add("currentpage");
    } else if (pageId == "saglik-rehberi") {
        console.log("saglik-rehberi");
        let nbItem = document.querySelectorAll(".item2");
        nbItem[0].classList.add("currentpage");
        nbItem[1].classList.add("currentpage");
    } else if (pageId == "bki") {
        console.log("bki");
        let nbItem = document.querySelectorAll(".item3");
        nbItem[0].classList.add("currentpage");
        nbItem[1].classList.add("currentpage");
    }
}