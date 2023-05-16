'use strict';

const ball = document.querySelector('#ball');

document.addEventListener('click', (e) => {
 
    console.log(e);

    console.log(e.clientX);
    console.log(e.clientY);

    ball.style.transform = `translateY(${e.clientY - 25}px)`;
    ball.style.transform += `translateX(${e.clientX - 25}px)`;
});