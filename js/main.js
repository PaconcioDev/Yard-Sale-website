const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIconMobile = document.querySelector(".icon-menu");
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener('click', toggleDesktopMenu);
menuIconMobile.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive")
}