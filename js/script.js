'use strict'
let headerBtn = document.querySelector('.welcome__btn');
let headerExitBtn = document.querySelector('.modal__exit-btn');
let welcomeModalWindow = document.querySelector('.modal');

let showWindow = (event) => {
   

};

headerBtn.addEventListener('click' , (event) => {
    
    welcomeModalWindow.style.display = 'flex';
    console.log(welcomeModalWindow);
})
headerExitBtn.addEventListener('click', (event) => {
    welcomeModalWindow.style.display = 'none';
})