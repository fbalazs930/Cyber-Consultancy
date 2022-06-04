const navbar = document.querySelector('.navbar');
const navbarToggler = document.querySelector('.navbar-toggler');
const menuIcon = document.querySelector('.menu-icon');
let clicks = 0;
navbarToggler.addEventListener('click', () => {
    if (clicks % 2 == 0) {
        navbar.style.backgroundColor = '#49099390';
        menuIcon.classList.add('fa-times');
        menuIcon.classList.remove('fa-bars');
    }
    else {
        setTimeout(() => {
            navbar.style.backgroundColor = 'transparent';
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-times');
        }, 130)
    }
    clicks++;
})