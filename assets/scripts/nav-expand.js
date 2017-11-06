const navHeader = document.getElementById('nav-header');
const navLinks = document.getElementById('nav-links');

navHeader.addEventListener('click', () => navLinks.classList.toggle('expanded'));

const navButtons = document.querySelectorAll('#nav-links a');
navButtons.forEach(btn => btn.addEventListener('click', () => navLinks.classList.remove('expanded')));
