import { drawCards, drawNavigation } from "./core";

const cardWrapperNode = document.querySelector('.card-wrapper');
const navigationWrapper = document.querySelectorAll('.dropdown-container');

const markupCards = drawCards();
cardWrapperNode.innerHTML = markupCards;

const markupNavigation = drawNavigation();
navigationWrapper.forEach((elem, index) => {
    elem.innerHTML = markupNavigation[index];
})
