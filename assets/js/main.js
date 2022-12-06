// show menu
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector(".nav__close");

// menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.querySelector("#nav-menu");
    // remove when click
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== PARALLAX ===============*/

/*=============== GSAP ANIMATION ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
