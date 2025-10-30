const connexion = document.getElementById('btn1');
const insc = document.getElementById('btn2');

const card1 = document.querySelector('.formulaire');
const card2 = document.querySelector('.formulaire_ins');



connexion.addEventListener('click', () => {
  if (!card1.classList.contains('open')) {
    card1.classList.add('open');
    card2.classList.remove('open');
    connexion.classList.add('open');
    insc.classList.remove('open');

  }
});

insc.addEventListener('click', () => {
  if (!card2.classList.contains('open')) {
    card2.classList.add('open');
    card1.classList.remove('open');
    insc.classList.add('open');
    connexion.classList.remove('open');
  }
});

window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const form = params.get('form');
  
    if (form === 'home') {
      card2.classList.add('open');   
      card1.classList.remove('open'); 
      connexion.classList.remove('open');
      insc.classList.add('open');
    }
  });
  
  
