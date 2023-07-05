const logo = document.querySelector(".material-symbols-outlined");
const navbar = document.querySelector("#surface");
const home = document.querySelector(".home");
const heroSection = document.querySelector("#hero-section");

function navbarVisible(){
    if(navbar.style.visibility === "hidden"){
       navbar.style.visibility = "visible";
        heroSection.style.filter = "grayscale(0.3) blur(3px) sepia(0.7)";
        
    }else if(navbar.style.visibility = "visible"){
        navbar.style.visibility = "hidden";
        heroSection.style.filter = "none";}
       
}
function navbarToHome(){
    if(navbar.style.visibility = "visible") {
        navbar.style.visibility = "hidden";
        heroSection.style.filter = "none";}
}
logo.addEventListener("click",navbarVisible);
home.addEventListener('click',navbarToHome);
