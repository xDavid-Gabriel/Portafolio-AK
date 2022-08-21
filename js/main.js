
/* =========== Navegacion =========== */
const list = document.querySelectorAll(".list");

function mueveBotones(){
  list.forEach((item)=>{
    item.classList.remove("active")
  })
  this.classList.add("active")
} 

list.forEach((item)=>{
  item.addEventListener("click", mueveBotones)
  console.log(item);
})

/*=========== SKILLS TABS ================*/


/*=========== MIXITUP FILTER PORTFOLIO ================*/
let mixerPorfolio = mixitup(".work__container", {
  selectors: {
    target: ".card-work",
  },
  animation: {
    duration: 300,
  },
});

/*=========== Link Active Work ================*/
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => {
    l.classList.remove("active-work");
  });

  this.classList.add("active-work");
}

linkWork.forEach((l) => {
  l.addEventListener("click", activeWork);
});

/*=========== Work Popup ================*/

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work__button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");

  document
    .querySelector(".portfolio__popup-inner")
    .addEventListener("click", (e) => {
      e.stopPropagation();
    });
}

document
  .querySelector(".portfolio__popup-close")
  .addEventListener("click", togglePortfolioPopup);

//remover desde el body
document.querySelector("body").addEventListener("click", () => {
  //cerrar modales de los portafolios
  document.querySelector(".portfolio__popup").classList.remove("open");
});

function portfolioItemDetails(portfolioitem) {
  document.querySelector(".pp__thumbnail > img").src =
    portfolioitem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle > span").innerHTML =
    portfolioitem.querySelector(".work__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML =
    portfolioitem.querySelector(".portfolio__item-details").innerHTML;
  /*Por si quiero hacerlo individualmente 1 por 1*/
  // document.querySelector(".portfolio__popup-body > h3").textContent = portfolioitem.querySelector(".details__title").textContent
  // document.querySelector(".portfolio__popup-body > p").textContent = portfolioitem.querySelector(".details__description").textContent
  // document.querySelector(".portfolio__popup-body > ul").innerHTML = portfolioitem.querySelector(".details__info").innerHTML
}
/*=========== SERVICES MODAL ================*/


/*=========== SWIPER TESTIMONIAL ================*/
let swiper = new Swiper(".testimonial__container", {
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

/*=========== INPUT ANIMATION ================*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  console.log(parent);
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

/* ===================== SCROLL SECTIONS ACTIVE LINK =====================*/
//obtener todas las secciones que tienen una identificación definida
const sections = document.querySelectorAll("section[id]");
console.log(sections);
// agregue un detector de eventos escuchando el desplazamiento
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // obtener la posición de desplazamiento actual
  let scrollY = window.pageYOffset;
  // console.log(scrollY);
  //Ahora recorremos las secciones para obtener los valores de altura, parte superior e ID para cada
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute("id")
    console.log(sectionId);

    //(Ingles)
    /* - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector */

    //(Español)
    /*Si nuestra posición de desplazamiento actual ingresa al espacio donde está la sección actual en la pantalla, agregue la clase .active al enlace de navegación correspondiente, de lo contrario, elimínelo
    - Para saber qué enlace necesita una clase activa, usamos la variable sectionId que obtenemos mientras recorremos las secciones como un selector*/
    
   if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
     document.querySelector(".navigation_container li[atributo*=" + sectionId + "]").classList.add("active")
   }else{
    document.querySelector(".navigation_container li[atributo*=" + sectionId + "]").classList.remove("active")
   }
  });
}
// Que se esconda los temas de colores al hacer scroll
window.addEventListener("scroll", ()=>{
  if(document.querySelector(".style-switcher").classList.contains("abrir")){
      document.querySelector(".style-switcher").classList.remove("abrir")
  }
})

// Toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler")
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("abrir")
})

// theme colors
const alternateStyles = document.querySelectorAll(".alternate-style")

const setActiveStyle = (color)=>{
    
alternateStyles.forEach((style)=>{
if(color === style.getAttribute("title")){
    style.removeAttribute("disabled")
}else{
    style.setAttribute("disabled", "true")
}
})
}

// theme light and dark mode

const dayNight = document.querySelector(".day-night")
dayNight.addEventListener("click",()=>{
  dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    // dayNight.querySelector("i").classList.toggle("fa-moon")

    document.body.classList.toggle("luz")
})