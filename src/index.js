import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

hamButton = document.querySelector('#hamButton');

const navElement = document.querySelector('.menuLinks');

hamButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
});


