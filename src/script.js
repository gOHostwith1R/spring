import { drawCards } from "./drawCards.js";

const cardWrapperNode = document.querySelector('.card-wrapper');

const markupCards = drawCards();
cardWrapperNode.innerHTML = markupCards;