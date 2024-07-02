window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scroll-navbar');
    } else {
        navbar.classList.remove('scroll-navbar');
    }
});
