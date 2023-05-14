
// Header
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});


// Responsive Navbar(for mobile less than 830px)
 let menu = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');

 menu.onclick = () => {
     menu.classList.toggle('fas fa-times');
     navbar.classList.toggle('active');
 };