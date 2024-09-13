function showMenu() {
    const menu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".overlay");
    const noScroll = document.querySelector("body");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    noScroll.classList.toggle("no-scroll");
}

function showSearch() {
    const search = document.querySelector(".offcanvas-search");
    const overlay = document.querySelector(".overlay");
    const noScroll = document.querySelector("body");
    search.classList.toggle("active");
    overlay.classList.toggle("active");
    noScroll.classList.toggle("no-scroll");
}

function loginPopup() {
    const popup = document.querySelector(".login-popup");
    const overlay = document.querySelector(".overlay");
    const noScroll = document.querySelector("body");
    popup.classList.toggle("active");
    overlay.classList.toggle("active");
    noScroll.classList.toggle("no-scroll");
}