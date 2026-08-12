const menuButton = document.getElementById("menuBtn");
const menu = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    menu.classList.toggle("ativo");
});


const links = document.querySelectorAll("nav a");

links.forEach(function (link) {

    link.addEventListener("click", function () {
        menu.classList.remove("ativo");
    });

});


const ano = document.getElementById("ano");

ano.textContent = new Date().getFullYear();