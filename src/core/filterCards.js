import { cardsData } from "../../mock";
import { drawCards } from "./drawCards.js";

export const filterCards = (event) => {
    const filterCardsData = cardsData.filter((elem) => elem.title.toLowerCase().includes(event?.target.value.toLowerCase()));
    const resultDraw = drawCards(filterCardsData);
    return resultDraw === '' ? `<h1 class="not-found">No results</h1>` : resultDraw;
}