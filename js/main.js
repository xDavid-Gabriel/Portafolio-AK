import { proyectos } from "./data/ProyectosData.js";
/* =========== Navegacion =========== */
const list = document.querySelectorAll(".list");

function mueveBotones() {
  list.forEach((item) => {
    item.classList.remove("active");
  });
  this.classList.add("active");
}

list.forEach((item) => {
  item.addEventListener("click", mueveBotones);
});

/*=========== FOTOS DE TRABAJOS  ================*/
// const workContainer = document.querySelector(".work__container");
// const loadMoreButton = document.querySelector("#load-more");
// let numProyectosCargados = 3;

// const newProyectos = proyectos.slice(0, numProyectosCargados);

// newProyectos.map((proyecto) => {
//   const div = document.createElement("div");
//   div.setAttribute("class", "col-12 col-md-6 col-lg-4 card-work");
//   div.innerHTML =
//     /*html*/
//     `
//     <div class="work__card">
//     <img
//       src="${proyecto.img}"
//       alt="${proyecto.title}"
//       class="work__img"
//     />
//     <h3 class="work__title">${proyecto.title}</h3>
//     </div>

// `;

//   workContainer.appendChild(div);
// });

const workCardsContainer = document.querySelector(".work__cards");
const loadMoreBtn = document.getElementById("load-more-btn");
const workOverlay = document.querySelector(".work-overlay");

let numProyectosMostrados = 8;

// Función para renderizar las tarjetas de proyectos
function renderProyectos() {
  workCardsContainer.innerHTML = "";
  const proyectosMostrados = proyectos.slice(0, numProyectosMostrados);

  proyectosMostrados.forEach((proyecto, i) => {
    const card = document.createElement("div");
    card.className = "work__card";
    card.innerHTML = `
    <img  src="${proyecto.img}" alt="${proyecto.title}" class="work__img" loading="lazy">
    <h3 class="work__title">${proyecto.title}</h3>
    `;

    workCardsContainer.appendChild(card);

    const workImg = document.querySelectorAll(".work__img");

    workImg[i].addEventListener("click", () => {
      workOverlay.innerHTML =
        /*html*/
        `<img class="work__img--overlay" src="${workImg[i].getAttribute(
          "src"
        )}"  loading="lazy"/>
      <button class="work-btn-close"><i class="fa-solid fa-xmark"></i></button>
      `;
      workOverlay.classList.add("work-overlay--active");

      //El boton de cerrar
      const workBtnClose = document.querySelector(".work-btn-close");

      //Para que no se propage
      const workImgOverlay = document.querySelector(".work__img--overlay");

      workOverlay.addEventListener("click", (event) => {
        if (event.target.classList.contains("work-btn-close")) {
          workOverlay.classList.remove("work-overlay--active");
          workOverlay.innerHTML = "";
        } else {
          workOverlay.classList.remove("work-overlay--active");
          workOverlay.innerHTML = "";
        }
      });
      workImgOverlay.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });
  });

  if (proyectosMostrados.length === proyectos.length) {
    loadMoreBtn.style.display = "none";
  }
}

// Función que se llama cuando se hace clic en el botón "Ver más"
function handleLoadMoreClick() {
  numProyectosMostrados += 3;
  renderProyectos();
}

// Asignar evento al botón "Ver más"
loadMoreBtn.addEventListener("click", handleLoadMoreClick);

// Renderizar las tarjetas de proyectos iniciales
renderProyectos();

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
// const sections = document.querySelectorAll("section[id]");

// // agregue un detector de eventos escuchando el desplazamiento
// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
//   // obtener la posición de desplazamiento actual
//   let scrollY = window.pageYOffset;
//   // console.log(scrollY);
//   //Ahora recorremos las secciones para obtener los valores de altura, parte superior e ID para cada
//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50,
//       sectionId = current.getAttribute("id");

//     //(Ingles)
//     /* - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
//     - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector */

//     //(Español)
//     /*Si nuestra posición de desplazamiento actual ingresa al espacio donde está la sección actual en la pantalla, agregue la clase .active al enlace de navegación correspondiente, de lo contrario, elimínelo
//     - Para saber qué enlace necesita una clase activa, usamos la variable sectionId que obtenemos mientras recorremos las secciones como un selector*/

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".navigation_container li[atributo*=" + sectionId + "]")
//         .classList.add("active");
//     } else {
//       document
//         .querySelector(".navigation_container li[atributo*=" + sectionId + "]")
//         .classList.remove("active");
//     }
//   });
// }
// Que se esconda los temas de colores al hacer scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("abrir")) {
    document.querySelector(".style-switcher").classList.remove("abrir");
  }
});

// Toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("abrir");
});

// theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");

const setActiveStyle = (color) => {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
};

// theme light and dark mode

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  // dayNight.querySelector("i").classList.toggle("fa-moon")

  document.body.classList.toggle("luz");
});
