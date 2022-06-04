const navbar = document.querySelector('.navbar');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarToggler = document.querySelector('.navbar-toggler');
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelectorAll('.nav-link');
let clicks = 0;

const show = () => {
  navbar.style.backgroundColor = '#490993cf';
  menuIcon.classList.add('fa-times');
  menuIcon.classList.remove('fa-bars');
  navbarCollapse.classList.add('show');
}
const hide = () => {
  navbar.style.backgroundColor = 'transparent';
  menuIcon.classList.add('fa-bars');
  menuIcon.classList.remove('fa-times');
  navbarCollapse.classList.remove('show');
}

navbarToggler.addEventListener('click', () => {
  if (clicks % 2 == 0) {
    show();
  }
  else {
    setTimeout(() => {
      hide();
    }, 130)
  }
  clicks++;
})
navLinks.forEach(item => {
  item.addEventListener('click', () => {
    hide();
    clicks++;
  })
});

window.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    navbar.style.opacity = 1;
  } else {
    navbar.style.opacity = 0;
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}