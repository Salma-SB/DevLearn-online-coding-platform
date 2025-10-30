
const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const buttn = document.querySelector('.buttons');

burger.addEventListener('click',()=>{
    if(menu.classList.contains('open'))
    {
        menu.classList.remove('open');
        buttn.classList.remove('open');
    }
    else{
        menu.classList.add('open');
        buttn.classList.add('open');       
    }
})