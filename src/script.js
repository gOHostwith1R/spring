import { drawCards, drawNavigation, drawDropdownContent } from "./core";

const cardWrapperNode = document.querySelector('.card-wrapper');
const navigationWrappers = document.querySelectorAll('.dropdown-container');
const dropdownWrappers = document.querySelectorAll('.dropdown-content');

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
