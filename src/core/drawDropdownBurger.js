import {dropdownContentData} from "../../mock";

export { dropdownContentData } from '../../mock';

export const drawDropdownBurger = () => {
    let markupDropdown = '';
    const resultDropdown = [];
    dropdownContentData.forEach((item) => {
        item.items.forEach((elem) => {
           if(elem.type === 'paragraph') {
                markupDropdown += `</li><p class="upper-item__burger">${elem.text}</p></li>`
            } else {
                markupDropdown += `<li><a class="hamburger-dropdown__link" href="#">${elem.text}</a></li>`
            }
        });
        resultDropdown.push(markupDropdown);
        resultDropdown.join('');
        markupDropdown = '';
    });
    return resultDropdown;
}
