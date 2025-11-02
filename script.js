document.addEventListener('DOMContentLoaded', function() {
   let burgerMenu = document.getElementById('burgerMenu');
    let nav = document.getElementById('nav');
    let navOverlay = document.getElementById('navOverlay');
    
    burgerMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
    });
    
    navOverlay.addEventListener('click', function() {
        nav.classList.remove('active');
        burgerMenu.classList.remove('active');
        navOverlay.classList.remove('active');
    });
    
   
  let navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burgerMenu.classList.remove('active');
            navOverlay.classList.remove('active');
        });
    });
});