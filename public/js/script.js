const navLinks = document.querySelector('#navLinks');
const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');

openBtn.addEventListener('click', () => {
    navLinks.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});