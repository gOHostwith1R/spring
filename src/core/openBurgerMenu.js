const burgerWrapper = document.querySelector('.wrapper-hamburger__menu');

export const openBurgerMenu = () => {
    burgerWrapper.classList.add('hamburger__visibility');
}