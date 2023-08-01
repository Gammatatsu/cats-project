let range = document.querySelector('.example__control-range')
let beforeImg = document.querySelector('.example__slider-demo--before')
let afterImg = document.querySelector('.example__slider-demo--after')
let beforeButton = document.querySelector('.example__control-button--before')
let afterButton = document.querySelector('.example__control-button--after')

beforeButton.addEventListener("click",function(){
    beforeImg.style.transition = '1s'
    afterImg.style.transition = '1s'
    beforeImg.style.width = '100%';
    afterImg.style.width = '0%';
    range.value = 0;
})
afterButton.addEventListener("click",function(){
    beforeImg.style.transition = '1s'
    afterImg.style.transition = '1s'
    beforeImg.style.width = '0';
    afterImg.style.width = '100%';

    range.value = 100;
})
range.addEventListener('input',function(){
    beforeImg.style.transition = '0.5s'
    afterImg.style.transition = '0.5s'
    beforeImg.style.width = 100 - range.value + '%'
    afterImg.style.width = range.value + '%'
})