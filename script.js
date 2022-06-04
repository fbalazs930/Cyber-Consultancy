const navbar = document.querySelector('.navbar');
const navbarToggler = document.querySelector('.navbar-toggler');
const menuIcon = document.querySelector('.menu-icon');
let clicks = 0;
navbarToggler.addEventListener('click', () => {
    if (clicks % 2 == 0) {
        navbar.style.backgroundColor = '#490993cf';
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

window.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    navbar.style.opacity=1;
  } else {
    navbar.style.opacity=0;
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}