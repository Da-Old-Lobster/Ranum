const moving_menu = document.querySelector('#menu_icon');
const menu_link = document.querySelector('.navbar_menu');

//this is a comment (help me)
const menu_movemove = () => {
    moving_menu.classList.toggle('is-active');
    menu_link.classList.toggle('active');
};

moving_menu.addEventListener('click', menu_movemove);