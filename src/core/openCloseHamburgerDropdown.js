export const openCloseHamburgerDropdown = (node) => {
    for(let i = 0; i < node.children.length; i++) {
        node.children[i].classList.contains('wrapper-hamburger__dropdown')
            ?
            node.children[i].classList.toggle('dropdown-content__hamburger-active')
            :
            '';
    }
}