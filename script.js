document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav a, .hero-cta a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                container.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

});
