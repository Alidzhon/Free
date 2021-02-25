window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.denis__list'),
    menuItem = document.querySelectorAll('.denis__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('denis__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('denis__list_active');
        })
    })
})