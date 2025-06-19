// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");

    } else {
        nav.classList.remove("header-scrolled");
    }
}

// Nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollaspe = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(e){
    e.addEventListener("click", function(){
        navCollaspe.classList.remove("show");
    })
});