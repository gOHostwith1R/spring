import { cardsData } from "../../mock/mockCards.js";

export const drawCards = (cards = cardsData) => {
    let markupCards = [];
    cards.forEach((elem) => {
        markupCards.push(`
        <section class="card">
            <img class="card-image" src=${elem.avatar} alt=${elem.altCard} />
            <div class="card-description">
                <h3 class="card-title">${elem.title}</h3>
                <p class="card-subtitle">${elem.subtitle}</p>
            </div>
        </section>
        `)
    })
    return markupCards.join('')
}
