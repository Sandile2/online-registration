const menuBtn = document.getElementById("menu-btn");
const navlinks =document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => { navlinks.classList.toggle("open");

const isOpen = navlinks.classList.contains("open");
menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")

});

 navlinks.addEventListener("click", (e) => {
    navlinks.classList.remove("open");
    menuBtnIcon.setAttribute('class', "ri-menu-line");
 });

 const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
 };

 // header container
 scrollReveal().reveal(".header__container .section__sunheader",{
    ...scrollRevealOption,
 })

 scrollReveal().reveal(".header__container h1",{
    ...scrollRevealOption,
 })

 scrollReveal().reveal(".header__container btn",{
    ...scrollRevealOption,
    delay: 1000,
 })
   
 // room container
 ScrollReveal9().reveal(".room_-card",  {
   ...scrollRevealOption,
   interval: 500,
 });

 // feature container
 ScrollReveal9().reveal(".feature_-card",  {
   ...scrollRevealOption,
   interval: 500,
 });

 // news container
 ScrollReveal9().reveal(".news_-card",  {
   ...scrollRevealOption,
   interval: 500,
 });
