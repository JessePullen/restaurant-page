import './style.css';
import { homePage } from './home-page';
import { menuPage } from './menu-page';
import { aboutPage } from './about-page';

const content = document.querySelector('#content');
const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const aboutButton = document.querySelector('.about');

homeButton.addEventListener('click', () => {
    content.textContent = null;
    homePage();
});
menuButton.addEventListener('click', () => {
    content.textContent = null;
    menuPage();
});
aboutButton.addEventListener('click', () => {
    content.textContent = null;
    aboutPage();
});

homePage();