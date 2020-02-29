const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const links = document.querySelectorAll(".sidebar li");
var about = document.querySelector(".sidebar li .about-link");

console.log(hamburger);
hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    hamburger.classList.toggle("cross");
    hamburger.classList.toggle("fade")
    links.forEach(link =>{
        link.classList.toggle("fade");

    });

});

about.addEventListener("click", () => {
    sidebar.classList.remove("open");
    hamburger.classList.toggle("cross");
    hamburger.classList.toggle("fade")
    links.forEach(link =>{
        link.classList.toggle("fade");

    });

});

// var clonedBurger = hamburger.cloneNode(true);
// sidebar.appendChild(clonedBurger);
// clonedBurger.style.backgound = "red";
// clonedBurger.style.width = 100 + "px";
// clonedBurger.style.height = 100 + "px";
// clonedBurger.style.index = 999;
