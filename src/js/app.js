import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


let menuBtn = document.querySelector('.header__menu-btn');
let menu = document.querySelector('.header-menu');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

let menuBtnPage = document.querySelector('.menu-btn-page');
let menuBlockPage = document.querySelector('.block-menu');
menuBtnPage.addEventListener('click', function(){
    menuBtnPage.classList.toggle('active');
    menuBlockPage.classList.toggle('active');
})

