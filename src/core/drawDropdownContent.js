import {dropdownContentData} from "../../mock/mockDropdownContent.js";

export const drawDropdownContent = () => {
    let markupDropdown = '';
    const resultDropdown = [];
    dropdownContentData.forEach((item) => {
        item.items.forEach((elem) => {
            if(elem.type === 'activeLink') {
                markupDropdown += `<a href="#" class="active-link">${elem.text}</a>`
            } else if(elem.type === 'paragraph') {
                markupDropdown += `<p class="upper-item">${elem.text}</p>`
            } else {
                markupDropdown += `<a href="#">${elem.text}</a>`
            }
        });
        resultDropdown.push(markupDropdown);
        resultDropdown.join('');
        markupDropdown = '';
    });
    return resultDropdown;
}
