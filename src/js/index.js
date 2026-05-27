import '../scss/style.scss'
import './script'
console.log('It works!')


const sidebar = document.querySelector('aside');

const burgerBtn = document.querySelector('.burger-btn');

const closeBtn = document.querySelector('.close-btn');

burgerBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

