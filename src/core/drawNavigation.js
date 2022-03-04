import { navigationData } from "../../mock";

export const drawNavigation = () => {
    let markupNavigation = '';
    const resultMarkup = [];
    navigationData.forEach((elem) => {
        markupNavigation += (`<a class="main-item" href="#">${elem.name}</a>`);
        markupNavigation += elem.content ? `<div class="arrow"></div>` : '';
        resultMarkup.push(markupNavigation);
        markupNavigation = ''
    });
    return resultMarkup;
}