import { drawCards, drawNavigation, drawDropdownContent, openBurgerMenu, drawNavigationBurger } from "./core";

const cardWrapperNode = document.querySelector('.card-wrapper');
const navigationWrappers = document.querySelectorAll('.dropdown-container');
const dropdownWrappers = document.querySelectorAll('.dropdown-content');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const wrapperHamburgerMenu = document.querySelector('.wrapper-hamburger__menu');
const closeBurger = document.querySelector('.hamburger__menu-close');
const navigationHamburgerMenu = document.querySelectorAll('.wrapper-hamburger__item');

const markupCards = drawCards();
cardWrapperNode.innerHTML = markupCards;

const markupNavigation = drawNavigation();
navigationWrappers.forEach((elem, index) => {
    elem.innerHTML = markupNavigation[index];
});

const markupDropdown = drawDropdownContent();
dropdownWrappers.forEach((elem, index) => {
    elem.innerHTML = markupDropdown[index];
});

hamburgerMenu.addEventListener('click', openBurgerMenu);
closeBurger.addEventListener('click', () => wrapperHamburgerMenu.classList.remove('hamburger__visibility'));

const markupNavigationHamburgerMenu = drawNavigationBurger();
navigationHamburgerMenu.forEach((elem, index) => {
    elem.innerHTML = markupNavigationHamburgerMenu[index];
})