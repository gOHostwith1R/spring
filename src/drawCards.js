import { cardsData } from "../mock";

export const drawCards = () => {
    let markupCards = [];
    cardsData.forEach((elem) => {
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
