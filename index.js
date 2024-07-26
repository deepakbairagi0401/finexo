let menuBtn = document.getElementById("mobile-menu-btn")
let closeBtn = document.getElementById("menu-close-btn")
let mobileMenu = document.getElementById("menu-list")
let slideMenu = document.getElementById("mobile-menu")

menuBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);

function showMenu() {
    if (menuBtn.style.display = "block") {
        menuBtn.classList.toggle("animate-btn")
        slideMenu.classList.add("show")
        setTimeout(() => {
            menuBtn.style.display = "none"
            closeBtn.style.display = "block"
            mobileMenu.style.display = "block"
            closeBtn.classList.remove("animate-btn");
        }, 500);
    }
}

function hideMenu() {
    if (closeBtn.style.display = "block") {
        closeBtn.classList.toggle("animate-btn")
        setTimeout(() => {
            closeBtn.style.display = "none";
            menuBtn.style.display = "block";
            menuBtn.classList.remove("animate-btn");
            mobileMenu.style.display = "none";
        }, 500);
    }
}