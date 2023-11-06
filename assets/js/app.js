import { title } from "/config/config.js";

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('h1').innerText = title;
  
    const sectionComunidade = document.querySelector('.section__comunidade');
    const section = document.querySelector('section');
    sectionComunidade.style.width = section.offsetWidth + "px";
    sectionComunidade.style.height = section.offsetWidth + "px";
    
    window.addEventListener('resize', () => {
        sectionComunidade.style.width = section.offsetWidth + "px";
        sectionComunidade.style.height = section.offsetWidth + "px";
    })
});

let aberto = false; // Alterei para 'let' para permitir a mudança de valor
const menuMobile = document.querySelector('.menu__mobile');
const menu = document.querySelector('.menu');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

menuMobile.addEventListener('click', () => {
    aberto = !aberto; // Inverte o valor de 'aberto' entre true e false
    menuMobile.classList.toggle('ativado');
    menu.classList.toggle('ativado');
    aberto ? (menuMobile.innerHTML = 'X') && (main.style.display = 'none') && (footer.style.display = 'none') : 
    (menuMobile.innerHTML = '&#9776;') && (main.style.display = 'block') && (footer.style.display = 'block');
});
