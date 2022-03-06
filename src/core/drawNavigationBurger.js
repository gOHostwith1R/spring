import { navigationData } from "../../mock";

export const drawNavigationBurger = () => {
    let markupNavigationBurger = '';
    const resultMarkup = [];
    navigationData.forEach((elem) => {
        markupNavigationBurger += (`<a href="#" class="hamburger-navigation">${elem.name}</a>`);
        markupNavigationBurger += elem.content ? `<div class="arrow-burger"></div>` : '';
        resultMarkup.push(markupNavigationBurger);
        markupNavigationBurger = ''
    });
    return resultMarkup;
}