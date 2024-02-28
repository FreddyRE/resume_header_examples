const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navbar-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('navbar-active');
});
