// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({behavior: 'smooth'});
    });
});

// Optional: Change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 50){
        navbar.style.background = '#005fa3';
    } else {
        navbar.style.background = '#007acc';
    }
});
